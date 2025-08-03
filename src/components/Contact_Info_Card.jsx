import contact_icon_1 from '../assets/contact_icon_1.png';
import contact_icon_2 from '../assets/contact_icon_2.png';
import contact_icon_3 from '../assets/contact_icon_3.png';

const contact_items = [
    {
        id: 1,
        icon: contact_icon_1,
        title: 'Phone Number',
        lines: ['012 345 678 9101', '012 345 678 9101']
    },
    {
        id: 2,
        icon: contact_icon_2,
        title: 'Email Address',
        lines: ['abcd@gmail.com', 'efgh@gmail.com']
    },
    {
        id: 3,
        icon: contact_icon_3,
        title: 'Office Address',
        lines: ['66 Broklyant, New York India', '3269 Road.']
    }
];

const Contact_Info_Card = () => {
    return (
        <section id='Contact'>
            <div className="container mx-auto py-20">
                <div className="flex flex-wrap justify-center gap-8">
                    {contact_items.map(item => (
                        <Card key={item.id} icon={item.icon} title={item.title} lines={item.lines} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact_Info_Card;

const Card = ({ icon, title, lines }) => {
    return (
        <div className="w-[250px] bg-white border border-[#eaeaea] rounded-md shadow-sm text-center">
            <div className="flex justify-center">
                <div className="bg-P rounded-b-[20px] px-6 py-[20px] -mt-6">
                    <img src={icon} alt={title} className="w-10 h-10 object-contain" />
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">{title}</h3>
                <div className="space-y-1 text-sm text-gray-600">
                    {lines.map((line, idx) => (
                        <p key={idx}>{line}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};
