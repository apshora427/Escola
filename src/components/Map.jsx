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
import Contact_Info_Card from './Contact_Info_Card';

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
    preview: map_2,
  },
];

const PUZZLE_ROWS = 5;
const PUZZLE_COLS = 8;

const Map = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mapStyleIndex, setMapStyleIndex] = useState(0);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [showPuzzle, setShowPuzzle] = useState(false);
  const [hasToggledOnce, setHasToggledOnce] = useState(false); // NEW

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
    const isFirstSatellite = !hasToggledOnce && mapStyles[nextIndex].name === 'Satellite';

    if (isFirstSatellite) {
      setHasToggledOnce(true); 
      setShowPuzzle(true);

      const totalAnimationTime = PUZZLE_ROWS * PUZZLE_COLS * 20 + 800;

      setTimeout(() => {
        setMapStyleIndex(nextIndex);
        setShowPuzzle(false);
      }, totalAnimationTime);
    } else {
      
      setMapStyleIndex(nextIndex);
    }
  };

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center py-[32px] mt-[120px]"
    >
      <div className="container mx-auto">
       <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-6xl px-4">
        <Contact_Info_Card />
      </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={hasEnteredView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
         
          {!isHovered && (
            <div className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center pointer-events-none">
              <p className="text-white text-lg font-semibold">
                Use <kbd className="bg-white text-black px-1 rounded">Ctrl</kbd> + Scroll to zoom
              </p>
            </div>
          )}

          
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

         
          <AnimatePresence>
            {showPuzzle && (
              <motion.div
                key="puzzleOverlay"
                className="absolute inset-0 z-40 grid pointer-events-none"
                style={{
                  gridTemplateRows: `repeat(${PUZZLE_ROWS}, 1fr)`,
                  gridTemplateColumns: `repeat(${PUZZLE_COLS}, 1fr)`,
                }}
              >
                {(() => {
                  const totalTiles = PUZZLE_ROWS * PUZZLE_COLS;
                  const tiles = [...Array(totalTiles).keys()];
                  const shuffled = [...tiles].sort(() => Math.random() - 0.5);

                  return tiles.map((tileIndex) => {
                    const row = Math.floor(tileIndex / PUZZLE_COLS);
                    const col = tileIndex % PUZZLE_COLS;

                    const backgroundSize = `${PUZZLE_COLS * 100}% ${PUZZLE_ROWS * 100}%`;
                    const backgroundPosition = `${(col / (PUZZLE_COLS - 1)) * 100}% ${(row / (PUZZLE_ROWS - 1)) * 100}%`;

                    return (
                      <motion.div
                        key={tileIndex}
                        initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{
                          delay: shuffled.indexOf(tileIndex) * 0.02,
                          duration: 0.4,
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
                  });
                })()}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Map */}
          {!showPuzzle && (
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
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Map;
