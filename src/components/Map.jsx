import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import map_1 from '../assets/map_1.png';
import map_2 from '../assets/map_2.png';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Enable Ctrl + Scroll zooming
const CtrlScrollZoom = () => {
  const map = useMap();

  useEffect(() => {
    const handleWheel = (e) => {
      if (!e.ctrlKey) {
        e.preventDefault();
        map.scrollWheelZoom.disable();
      } else {
        map.scrollWheelZoom.enable();
      }
    };

    const container = map.getContainer();
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [map]);

  return null;
};

// Custom zoom control at bottom right
const CustomZoomControl = () => {
  const map = useMap();

  useEffect(() => {
    const existingControls = document.querySelectorAll('.leaflet-control-zoom');
    existingControls.forEach(ctrl => ctrl.remove());

    const control = L.control.zoom({ position: 'bottomright' });
    control.addTo(map);

    return () => {
      control.remove();
    };
  }, [map]);

  return null;
};

const mapStyles = [
  {
    name: 'Road',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; OpenStreetMap contributors',
    preview: map_1,
  },
  {
    name: 'Satellite',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: '&copy; Esri contributors',
    preview: map_2, // This should be a crisp screenshot of the Satellite view
  },
];

const PUZZLE_ROWS = 5;
const PUZZLE_COLS = 8;

const Map = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mapStyleIndex, setMapStyleIndex] = useState(0);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [showPuzzle, setShowPuzzle] = useState(false);

  const mapCenter = [23.8103, 90.4125]; // Dhaka

  const currentStyle = mapStyles[mapStyleIndex];
  const nextStyle = mapStyles[(mapStyleIndex + 1) % mapStyles.length];

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) setHasEnteredView(true);
  }, [inView]);

  const handleToggle = () => {
    const nextIndex = (mapStyleIndex + 1) % mapStyles.length;

    if (mapStyles[nextIndex].name === 'Satellite') {
      setShowPuzzle(true);

      setTimeout(() => {
        setMapStyleIndex(nextIndex);
        setShowPuzzle(false);
      }, 1000); // Matches animation duration
    } else {
      setMapStyleIndex(nextIndex);
    }
  };

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center py-8"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={hasEnteredView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Hover Overlay */}
          {!isHovered && (
            <div className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center pointer-events-none">
              <p className="text-white text-lg font-semibold">
                Use <kbd className="bg-white text-black px-1 rounded">Ctrl</kbd> + Scroll to zoom
              </p>
            </div>
          )}

          {/* Toggle Button */}
          <button
            onClick={handleToggle}
            title={`Switch to ${nextStyle.name} View`}
            className="absolute bottom-4 left-4 z-30 w-16 h-16 rounded-md overflow-hidden border-2 border-white shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={nextStyle.preview}
              alt={`Preview of ${nextStyle.name} View`}
              className="w-full h-full object-cover"
            />
          </button>

          {/* Puzzle Overlay */}
          <AnimatePresence>
            {showPuzzle && (
              <motion.div
                key="puzzleOverlay"
                className="absolute inset-0 z-40 grid"
                style={{
                  gridTemplateRows: `repeat(${PUZZLE_ROWS}, 1fr)`,
                  gridTemplateColumns: `repeat(${PUZZLE_COLS}, 1fr)`,
                }}
              >
                {[...Array(PUZZLE_ROWS * PUZZLE_COLS)].map((_, i) => {
                  const delay = Math.random() * 0.25;
                  const row = Math.floor(i / PUZZLE_COLS);
                  const col = i % PUZZLE_COLS;

                  const backgroundSize = `${PUZZLE_COLS * 100}% ${PUZZLE_ROWS * 100}%`;
                  const backgroundPosition = `${(col / (PUZZLE_COLS - 1)) * 100}% ${(row / (PUZZLE_ROWS - 1)) * 100}%`;

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{
                        delay,
                        duration: 0.25,
                        ease: 'easeInOut',
                      }}
                      style={{
                        backgroundImage: `url(${nextStyle.preview})`,
                        backgroundSize,
                        backgroundPosition,
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Map */}
          <MapContainer
            center={mapCenter}
            zoom={13}
            zoomControl={false}
            className="w-full h-full z-10"
          >
            <TileLayer attribution={currentStyle.attribution} url={currentStyle.url} />
            <CustomZoomControl />
            <CtrlScrollZoom />

            <Marker position={mapCenter}>
              <Popup>Dhaka City Center</Popup>
            </Marker>
          </MapContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default Map;
