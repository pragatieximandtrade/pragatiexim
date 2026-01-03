import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
// import doc1 from './doc1.png'
// import doc2 from './doc2.png'
// import doc3 from './doc3.png'
// import doc4 from './doc4.png'
// import doc5 from './doc5.png'
// import doc6 from './doc6.png'
// import doc7 from './doc7.png'
// import doc8 from './doc8.png'
// import doc9 from './doc9.png'
// import doc10 from './doc10.png'
// import doc11 from './doc11.png'
// import doc12 from './doc12.png'
// import doc13 from './doc13.png'
// import doc14 from './doc14.png'
// import doc15 from './doc15.png'
import soup1 from './soup1.png'
import soup2 from './soup2.png'
import soup3 from './soup3.png'
import soup4 from './soup4.png'
import soup5 from './soup5.png'
import papercup1 from './papercup1.png'
import papercup2 from './papercup2.png'
import papercup3 from './papercup3.png'
import papercup4 from './papercup4.png'
import papercup5 from './papercup5.png'
import papercup6 from './papercup6.png'
import ice1 from './ice1.png'
import ice2 from './ice2.png'
import ice3 from './ice3.png'
import ice4 from './ice4.png'
import ice5 from './ice5.png'
import ice6 from './ice6.png'
import ice7 from './ice7.png'
import ice8 from './ice8.png'
import ice9 from './ice9.png'
import bowl1 from './bowl1.png'
import bowl2 from './bowl2.png'
import bowl3 from './bowl3.png'
import bowl4 from './bowl4.png'
import bowl5 from './bowl5.png'
import bowl6 from './bowl6.png'
import bowl7 from './bowl7.png'
import bowl8 from './bowl8.png'
import bowl9 from './bowl9.png'
import paperlid1 from './paperlid1.png'
import paperlid2 from './paperlid2.png'
import paperlid3 from './paperlid3.png'
import paperlid4 from './paperlid4.png'
import paperlid5 from './paperlid5.png'
import paperlid6 from './paperlid6.png'
import pplid1 from './pplid1.png'
import pplid2 from './pplid2.png'
import pplid3 from './pplid3.png'
import pplid4 from './pplid4.png'
import pplid5 from './pplid5.png'
import pplid6 from './pplid6.png'
import pplid7 from './pplid7.png'
import petlid1 from './petlid1.png'
import petlid2 from './petlid2.png'
import paperbox1 from './paperbox1.png'
import paperbox2 from './paperbox2.png'
import paperbox3 from './paperbox3.png'
import paperbox4 from './paperbox4.png'
import paperbox5 from './paperbox5.png'
import paperbox6 from './paperbox6.png'
import paperbox7 from './paperbox7.png'
import saladbox from './saladbox.png'
import papertray from './papertray.png'
import paperbag from './paperbag.png'
import nonwovenbag from './nonwovenbag.png'
import noodlebox1 from './noodlebox1.png'
import noodlebox2 from './noodlebox2.png'
import noodlebox3 from './noodlebox3.png'
import pizzabox1 from './pizzabox1.png'
import pizzabox2 from './pizzabox2.png'
import pizzabox3 from './pizzabox3.png'
import pizzabox4 from './pizzabox4.png'
import popcorn1 from './popcorn1.png'
import popcorn2 from './popcorn2.png'
import chickenpaperbox from './chickenpaperbox.png'
import burgerbox from './burgerbox.png'
// import Dermatologist from './Dermatologist.svg'
// import Gastroenterologist from './Gastroenterologist.svg'
// import General_physician from './General_physician.svg'
// import Gynecologist from './Gynecologist.svg'
// import Neurologist from './Neurologist.svg'
// import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const categoryData = [
    {
        category: 'soup cup',
        // image: soup cup
    },
    {
        category: 'paper cup',
        // image: PAPER CUP
    },
    {
        category: 'ice cream paper cup',
        // image: ICE PC
    },
    {
        category: 'paper bowl',
        // image: Pediatricians
    },
    {
        category: 'lid',
        // image: Neurologist
    },
    {
        category: 'paper box',
        // image: Gastroenterologist
    },
    {
        category: 'salad box',
        // image: Gastroenterologist
    },
    {
        category: 'paper tray',
        // image: Gastroenterologist
    },
    {
        category: 'paper bag',
        // image: Gastroenterologist
    },
    {
        category: 'non woven bag',
        // image: Gastroenterologist
    },
    {
        category: 'noodle box',
        // image: Gastroenterologist
    },
    {
        category: 'pizza box',
        // image: Gastroenterologist
    },
    {
        category: 'popcorn bucket',
        // image: Gastroenterologist
    },
    {
        category: 'chicken box',
        // image: Gastroenterologist
    },
    // {
    //     category: 'paper cone',
    //     // image: Gastroenterologist
    // },
    // {
    //     category: 'Gastroenterologist',
    //     // image: Gastroenterologist
    // },
]

export const products = [
    {
        _id: 'product1',
        name: '8oz Soup Cup',
        image: soup1,
        category: 'soup cup',
        size: {
            line1: 'Top: 9.8cm',
            line2: 'Bottom: 8.1cm',
            line3: 'Height: 6.0cm'
        },
        carton_size: '50x21x46cm',
        gw: '5.5KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product2',
        name: '8oz Soup Cup 2',
        image: soup1,
        category: 'soup cup',
        size: {
            line1: 'Top: 9.0cm',
            line2: 'Bottom: 7.4cm',
            line3: 'Height: 6.5cm'
        },
        carton_size: '47.5x19x58cm',
        gw: '5.3KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product3',
        name: '12oz Soup Cup',
        image: soup2,
        category: 'soup cup',
        size: {
            line1: 'Top: 9.8cm',
            line2: 'Bottom: 8.1cm',
            line3: 'Height: 7.0cm'
        },
        carton_size: '50x50x21cm',
        gw: '6.3KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product4',
        name: '12oz Soup Cup 2',
        image: soup2,
        category: 'soup cup',
        size: {
            line1: 'Top: 9.0cm',
            line2: 'Bottom: 7.4cm',
            line3: 'Height: 8.8cm'
        },
        carton_size: '47.5x19x58cm',
        gw: '6.4KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product5',
        name: '16oz Soup Cup',
        image: soup3,
        category: 'soup cup',
        size: {
            line1: 'Top: 9.8cm',
            line2: 'Bottom: 7.5cm',
            line3: 'Height: 10.0cm'
        },
        carton_size: '50x21x61cm',
        gw: '7.5KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product6',
        name: '26oz Soup Cup',
        image: soup4,
        category: 'soup cup',
        size: {
            line1: 'Top: 11.8cm',
            line2: 'Bottom: 9.4cm',
            line3: 'Height: 11.0cm'
        },
        carton_size: '60x25x65.5cm',
        gw: '10.15KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product7',
        name: '32oz Soup Cup',
        image: soup5,
        category: 'soup cup',
        size: {
            line1: 'Top: 11.8cm',
            line2: 'Bottom: 9.4cm',
            line3: 'Height: 13.3cm'
        },
        carton_size: '60x25x65.5cm',
        gw: '11.2KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product8',
        name: '8oz Single wall paper Cup',
        image: papercup1,
        category: 'paper cup',
        size: {
            line1: 'Top: 8.0cm',
            line2: 'Bottom: 5.6cm',
            line3: 'Height: 9.3cm'
        },
        carton_size: '42x34x40cm',
        gw: '5.5KG',
        pc: '100PCS/CTN'
    },
    {
        _id: 'product9',
        name: '12oz Single wall paper Cup',
        image: papercup2,
        category: 'paper cup',
        size: {
            line1: 'Top: 8.0cm',
            line2: 'Bottom: 5.2cm',
            line3: 'Height: 10.9cm'
        },
        carton_size: '47x25x41cm',
        gw: '10.3KG',
        pc: '1000PCS/CTN'
    },
    {
        _id: 'product10',
        name: '12oz Single wall paper Cup 2',
        image: papercup2,
        category: 'paper cup',
        size: {
            line1: 'Top: 9.0cm',
            line2: 'Bottom: 5.8cm',
            line3: 'Height: 11.2cm'
        },
        carton_size: '46x37x60cm',
        gw: '5.3KG',
        pc: '1000PCS/CTN'
    },
    {
        _id: 'product11',
        name: '16oz Single wall paper Cup',
        image: papercup3,
        category: 'paper cup',
        size: {
            line1: 'Top: 9.0cm',
            line2: 'Bottom: 5.6cm',
            line3: 'Height: 13.2cm'
        },
        carton_size: '46x37x60cm',
        gw: '6.3KG',
        pc: '1000PCS/CTN'
    },
    {
        _id: 'product12',
        name: '8oz Double wall paper Cup',
        image: papercup4,
        category: 'paper cup',
        size: {
            line1: 'Top: 9.0cm',
            line2: 'Bottom: 5.8cm',
            line3: 'Height: 11.0cm'
        },
        carton_size: '40x32x61cm',
        gw: '6.4KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product13',
        name: '12oz Double wall paper Cup',
        image: papercup5,
        category: 'paper cup',
        size: {
            line1: 'Top: 9.0cm',
            line2: 'Bottom: 5.8cm',
            line3: 'Height: 11.2cm'
        },
        carton_size: '55x37x46cm',
        gw: '7.5KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product14',
        name: '16oz Double wall paper Cup',
        image: papercup6,
        category: 'paper cup',
        size: {
            line1: 'Top: 9.0cm',
            line2: 'Bottom: 5.6cm',
            line3: 'Height: 13.2cm'
        },
        carton_size: '46x36.5x68cm',
        gw: '10.15KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product15',
        name: '4oz Ice Cream Paper Cup',
        image: ice1,
        category: 'ice cream paper cup',
        size: {
            line1: 'Top: 7.3cm',
            line2: 'Bottom: 6.0cm',
            line3: 'Height: 5.2cm'
        },
        carton_size: '37.5x29x42cm',
        gw: '6KG',
        pc: '1000PCS/CTN'
    },
    {
        _id: 'product16',
        name: '4oz - 2 Ice Cream Paper Cup',
        image: ice1,
        category: 'ice cream paper cup',
        size: {
            line1: 'Top: 6.7cm',
            line2: 'Bottom: 5.2cm',
            line3: 'Height: 6.2cm'
        },
        carton_size: '34x29x59cm',
        gw: '7KG',
        pc: '1000PCS/CTN'
    },
    {
        _id: 'product17',
        name: '5oz Ice Cream Paper Cup',
        image: ice2,
        category: 'ice cream paper cup',
        size: {
            line1: 'Top: 6.9cm',
            line2: 'Bottom: 5.2cm',
            line3: 'Height: 6.9cm'
        },
        carton_size: '42x35x53cm',
        gw: '9KG',
        pc: '1450PCS/CTN'
    },
    {
        _id: 'product18',
        name: '6oz Ice Cream Paper Cup',
        image: ice3,
        category: 'ice cream paper cup',
        size: {
            line1: 'Top: 8.3cm',
            line2: 'Bottom: 6.9cm',
            line3: 'Height: 4.6cm'
        },
        carton_size: '70x44x52cm',
        gw: '13KG',
        pc: '240PCS/CTN'
    },
    {
        _id: 'product19',
        name: '7oz Ice Cream Paper Cup',
        image: ice4,
        category: 'ice cream paper cup',
        size: {
            line1: 'Top: 8.7cm',
            line2: 'Bottom: 7.0cm',
            line3: 'Height: 5.4cm'
        },
        carton_size: '43x35x47cm',
        gw: '8KG',
        pc: '1000PCS/CTN'
    },
    {
        _id: 'product20',
        name: '7oz - 2 Ice Cream Paper Cup',
        image: ice4,
        category: 'ice cream paper cup',
        size: {
            line1: 'Top: 7.6cm',
            line2: 'Bottom: 5.6cm',
            line3: 'Height: 7.4cm'
        },
        carton_size: '60x40x56.5cm',
        gw: '14KG',
        pc: '1950PCS/CTN'
    },
    {
        _id: 'product21',
        name: '8oz Ice Cream Paper Cup',
        image: ice5,
        category: 'ice cream paper cup',
        size: {
            line1: 'Top: 8.7cm',
            line2: 'Bottom: 6.6cm',
            line3: 'Height: 7.0cm'
        },
        carton_size: '70x44x54cm',
        gw: '19KG',
        pc: '2700PCS/CTN'
    },
    {
        _id: 'product22',
        name: '13oz Ice Cream Paper Cup',
        image: ice6,
        category: 'ice cream paper cup',
        size: {
            line1: 'Top: 10.1cm',
            line2: 'Bottom: 7.3cm',
            line3: 'Height: 8.6cm'
        },
        carton_size: '70x44x54cm',
        gw: '14KG',
        pc: '1320PCS/CTN'
    },
    {
        _id: 'product23',
        name: '16oz Ice Cream Paper Cup',
        image: ice7,
        category: 'ice cream paper cup',
        size: {
            line1: 'Top: 9.8cm',
            line2: 'Bottom: 7.4cm',
            line3: 'Height: 10.2cm'
        },
        carton_size: '50x21x61cm',
        gw: '7.5KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product24',
        name: '20oz Ice Cream Paper Cup',
        image: ice8,
        category: 'ice cream paper cup',
        size: {
            line1: 'Top: 12.0cm',
            line2: 'Bottom: 9.7cm',
            line3: 'Height: 7.7cm'
        },
        carton_size: '63x51x57cm',
        gw: '14KG',
        pc: '1000PCS/CTN'
    },
    {
        _id: 'product25',
        name: '32oz Ice Cream Paper Cup',
        image: ice9,
        category: 'ice cream paper cup',
        size: {
            line1: 'Top: 11.7cm',
            line2: 'Bottom: 9.3cm',
            line3: 'Height: 12.8cm'
        },
        carton_size: '60x25x65.5cm',
        gw: '12KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product26',
        name: '14oz Paper Bowl (350ml)',
        image: bowl1,
        category: 'paper bowl',
        size: {
            line1: 'Top: 11.2cm',
            line2: 'Bottom: 9.3cm',
            line3: 'Height: 6.0cm'
        },
        carton_size: '57x46x53cm',
        gw: '12KG',
        pc: '1000PCS/CTN'
    },
    {
        _id: 'product27',
        name: '16oz Paper Bowl (450ml)',
        image: bowl2,
        category: 'paper bowl',
        size: {
            line1: 'Top: 11.2cm',
            line2: 'Bottom: 9.2cm',
            line3: 'Height: 8.0cm'
        },
        carton_size: '58x45.5x55cm',
        gw: '14KG',
        pc: '1000PCS/CTN'
    },
    {
        _id: 'product28',
        name: '18oz Paper Bowl (500ml)',
        image: bowl3,
        category: 'paper bowl',
        size: {
            line1: 'Top: 15.0cm',
            line2: 'Bottom: 12.8cm',
            line3: 'Height: 5.0cm'
        },
        carton_size: '47x31x49cm',
        gw: '5KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product29',
        name: '24oz Paper Bowl (750ml)',
        image: bowl4,
        category: 'paper bowl',
        size: {
            line1: 'Top: 14.2cm',
            line2: 'Bottom: 12.0cm',
            line3: 'Height: 6.5cm'
        },
        carton_size: '72x29x52cm',
        gw: '9.5KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product30',
        name: '25oz Paper Bowl (750ml)',
        image: bowl5,
        category: 'paper bowl',
        size: {
            line1: 'Top: 15.0cm',
            line2: 'Bottom: 12.8cm',
            line3: 'Height: 6.0cm'
        },
        carton_size: '47x31x49cm',
        gw: '5.8KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product31',
        name: '35oz Paper Bowl (1000ml)',
        image: bowl6,
        category: 'paper bowl',
        size: {
            line1: 'Top: 15.0cm',
            line2: 'Bottom: 12.8cm',
            line3: 'Height: 7.5cm'
        },
        carton_size: '46x31x54cm',
        gw: '6.5KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product32',
        name: '40oz Paper Bowl (1100ml)',
        image: bowl7,
        category: 'paper bowl',
        size: {
            line1: 'Top: 16.5cm',
            line2: 'Bottom: 14.4cm',
            line3: 'Height: 6.3cm'
        },
        carton_size: '51x34x51cm',
        gw: '7KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product33',
        name: '42oz Paper Bowl (1200ml)',
        image: bowl8,
        category: 'paper bowl',
        size: {
            line1: 'Top: 16.5cm',
            line2: 'Bottom: 14.4cm',
            line3: 'Height: 7.5cm'
        },
        carton_size: '51x33x51cm',
        gw: '7.5KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product34',
        name: '46oz Paper Bowl (1300ml)',
        image: bowl9,
        category: 'paper bowl',
        size: {
            line1: 'Top: 18.4cm',
            line2: 'Bottom: 16.3cm',
            line3: 'Height: 6.5cm'
        },
        carton_size: '56x38x62.5cm',
        gw: '8.5KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product35',
        name: '90mm Paper Lid',
        image: paperlid1,
        category: 'lid',
        size: {
            line1: 'Diameter: 9.0cm'
        },
        carton_size: '44x33x45cm',
        gw: '5.3KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product36',
        name: '98mm Paper Lid',
        image: paperlid2,
        category: 'lid',
        size: {
            line1: 'Diameter: 9.8cm'
        },
        carton_size: '46x35x49cm',
        gw: '6.5KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product37',
        name: '118mm Paper Lid',
        image: paperlid3,
        category: 'lid',
        size: {
            line1: 'Diameter: 11.8cm'
        },
        carton_size: '55x35x56cm',
        gw: '9KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product38',
        name: '142mm Paper Lid',
        image: paperlid4,
        category: 'lid',
        size: {
            line1: 'Diameter: 14.2cm'
        },
        carton_size: '72x38x59cm',
        gw: '6.5KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product39',
        name: '150mm Paper Lid',
        image: paperlid5,
        category: 'lid',
        size: {
            line1: 'Diameter: 15.0cm'
        },
        carton_size: '62x35x48cm',
        gw: '7KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product40',
        name: '165mm Paper Lid',
        image: paperlid6,
        category: 'lid',
        size: {
            line1: 'Diameter: 16.5cm'
        },
        carton_size: '70x36x53cm',
        gw: '4KG',
        pc: '150PCS/CTN'
    },
    {
        _id: 'product41',
        name: '90mm PP Lid',
        image: pplid1,
        category: 'lid',
        size: {
            line1: 'Diameter: 9.0cm'
        },
        carton_size: '48x25x39cm',
        gw: '3.5KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product42',
        name: '97mm PP Lid',
        image: pplid2,
        category: 'lid',
        size: {
            line1: 'Diameter: 9.7cm'
        },
        carton_size: '51x21x41cm',
        gw: '4.5KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product43',
        name: '116mm PP Lid',
        image: pplid3,
        category: 'lid',
        size: {
            line1: 'Diameter: 11.6cm'
        },
        carton_size: '60.5x25x51cm',
        gw: '5KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product44',
        name: '142mm PP Lid',
        image: pplid4,
        category: 'lid',
        size: {
            line1: 'Diameter: 14.2cm'
        },
        carton_size: '74x33x34cm',
        gw: '5.5KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product45',
        name: '150mm PP Lid',
        image: pplid5,
        category: 'lid',
        size: {
            line1: 'Diameter: 15.0cm'
        },
        carton_size: '31x31x48cm',
        gw: '2.8KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product46',
        name: '165mm PP Lid',
        image: pplid6,
        category: 'lid',
        size: {
            line1: 'Diameter: 16.5cm'
        },
        carton_size: '35x35x53cm',
        gw: '3KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product47',
        name: '185mm PP Lid',
        image: pplid7,
        category: 'lid',
        size: {
            line1: 'Diameter: 18.5cm'
        },
        carton_size: '61x20x59cm',
        gw: '4KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product48',
        name: '150mm PET Lid',
        image: petlid1,
        category: 'lid',
        size: {
            line1: 'Diameter: 15.0cm'
        },
        carton_size: '49x17x48cm',
        gw: '3.5KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product49',
        name: '165mm PET Lid',
        image: petlid2,
        category: 'lid',
        size: {
            line1: 'Diameter: 16.5cm'
        },
        carton_size: '34x34x54cm',
        gw: '3KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product50',
        name: 'Paper Box (800ml)',
        image: paperbox1,
        category: 'paper box',
        size: {
            line1: 'Top: 13x10.7cm',
            line2: 'Bottom: 11.3x9cm',
            line3: 'Height: 6.5cm'
        },
        carton_size: '58x35x35cm',
        gw: '8.15KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product51',
        name: 'Paper Box (1480ml)',
        image: paperbox2,
        category: 'paper box',
        size: {
            line1: 'Top: 21.5x15.8cm',
            line2: 'Bottom: 20x14.2cm',
            line3: 'Height: 4.7cm'
        },
        carton_size: '47x45x60cm',
        gw: '13.5KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product52',
        name: 'Paper Box (2000ml)',
        image: paperbox3,
        category: 'paper box',
        size: {
            line1: 'Top: 21.5x16cm',
            line2: 'Bottom: 19.6x14cm',
            line3: 'Height: 6.5cm'
        },
        carton_size: '53x47x56cm',
        gw: '15.35KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product53',
        name: 'Paper Box (1080ml)',
        image: paperbox4,
        category: 'paper box',
        size: {
            line1: 'Top: 16.6X13.8cm',
            line2: 'Bottom: 15.2x12.2cm',
            line3: 'Height: 5.0cm'
        },
        carton_size: '59x40x45cm',
        gw: '10.15KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product54',
        name: 'Paper Box (1400ml)',
        image: paperbox5,
        category: 'paper box',
        size: {
            line1: 'Top: 17X13.5cm',
            line2: 'Bottom: 15.3x12.1cm',
            line3: 'Height: 6.3cm'
        },
        carton_size: '59x40x45cm',
        gw: '10.15KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product55',
        name: 'Paper Box (750ml)',
        image: paperbox6,
        category: 'paper box',
        size: {
            line1: 'Top: 16.5X13.4cm',
            line2: 'Bottom: 15.3x12.4cm',
            line3: 'Height: 3.8cm'
        },
        carton_size: '50x35x48cm',
        gw: '9.2KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product56',
        name: 'Snack Paper Box',
        image: paperbox7,
        category: 'paper box',
        size: {
            line1: 'Top: 15.6x9cm',
            line2: 'Bottom: 14x8cm',
            line3: 'Height: 5.0cm'
        },
        carton_size: '53x36x51cm',
        gw: '9.1KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product57',
        name: 'Snack Paper Box 2',
        image: paperbox7,
        category: 'paper box',
        size: {
            line1: 'Top: 16.9x8.4cm',
            line2: 'Bottom: 15x7cm',
            line3: 'Height: 4.0cm'
        },
        carton_size: '60x40x52cm',
        gw: '16.45KG',
        pc: '1000PCS/CTN'
    },
    {
        _id: 'product58',
        name: 'Salad Box',
        image: saladbox,
        category: 'salad box',
        size: {
            line1: 'Top: 16x12cm',
            line2: 'Bottom: 14x10cm',
            line3: 'Height: 5.0cm'
        },
        carton_size: '50x27x60cm',
        gw: '12KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product59',
        name: 'Salad Box 2',
        image: saladbox,
        category: 'salad box',
        size: {
            line1: 'Top: 20x12cm',
            line2: 'Bottom: 18x10cm',
            line3: 'Height: 5.0cm'
        },
        carton_size: '50x43x48cm',
        gw: '9KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product60',
        name: 'Salad Box 3',
        image: saladbox,
        category: 'salad box',
        size: {
            line1: 'Top: 20.4x14.2cm',
            line2: 'Bottom: 17.8x12cm',
            line3: 'Height: 6.0cm'
        },
        carton_size: '50x43x48cm',
        gw: '9KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product61',
        name: 'Paper Tray',
        image: papertray,
        category: 'paper tray',
        size: {
            line1: 'Top: 13x9cm',
            line2: 'Bottom: 11.5x6.8cm',
            line3: 'Height: 4.0cm'
        },
        carton_size: '45x37x60cm',
        gw: '20KG',
        pc: '1800PCS/CTN'
    },
    {
        _id: 'product62',
        name: 'Paper Tray 2',
        image: papertray,
        category: 'paper tray',
        size: {
            line1: 'Top: 17.6x10.7cm',
            line2: 'Bottom: 15x8.5cm',
            line3: 'Height: 4.0cm'
        },
        carton_size: '55x39x59cm',
        gw: '28.1KG',
        pc: '1800PCS/CTN'
    },
    {
        _id: 'product63',
        name: 'Paper Bag',
        image: paperbag,
        category: 'paper bag',
        size: {
            line1: 'Length: 21cm',
            line2: 'Width: 11cm',
            line3: 'Height: 27cm'
        },
        carton_size: '43x39x53cm',
        gw: '17.65KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product64',
        name: 'Paper Bag 2',
        image: paperbag,
        category: 'paper bag',
        size: {
            line1: 'Length: 28cm',
            line2: 'Width: 15cm',
            line3: 'Height: 28cm'
        },
        carton_size: '58x41x54cm',
        gw: '25.1KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product65',
        name: 'Paper Bag 3',
        image: paperbag,
        category: 'paper bag',
        size: {
            line1: 'Length: 20cm',
            line2: 'Width: 14cm',
            line3: 'Height: 26cm'
        },
        carton_size: '45x38x57cm',
        gw: '18KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product66',
        name: 'Non-woven Bag',
        image: nonwovenbag,
        category: 'non woven bag',
        size: {
            line1: 'Length: 20cm',
            line2: 'Width: 13cm',
            line3: 'Height: 25cm'
        },
        carton_size: '60x32x85cm',
        gw: '21.5KG',
        pc: '1000PCS/CTN'
    },
    {
        _id: 'product67',
        name: 'Non-woven Bag 2',
        image: nonwovenbag,
        category: 'non woven bag',
        size: {
            line1: 'Length: 25cm',
            line2: 'Width: 13cm',
            line3: 'Height: 27.5cm'
        },
        carton_size: '75x35x85cm',
        gw: '25.8KG',
        pc: '1000PCS/CTN'
    },
    {
        _id: 'product68',
        name: 'Non-woven Bag 3',
        image: nonwovenbag,
        category: 'non woven bag',
        size: {
            line1: 'Length: 25cm',
            line2: 'Width: 14cm',
            line3: 'Height: 29cm'
        },
        carton_size: '82x36x90cm',
        gw: '31KG',
        pc: '1000PCS/CTN'
    },
    {
        _id: 'product69',
        name: '16oz Noodle Box',
        image: noodlebox1,
        category: 'noodle box',
        size: {
            line1: 'Top: 8.2cm',
            line2: 'Bottom: 8.2cm',
            line3: 'Height: 10.0cm'
        },
        carton_size: '52x21x62cm',
        gw: '8KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product70',
        name: '26oz Noodle Box',
        image: noodlebox2,
        category: 'noodle box',
        size: {
            line1: 'Top: 9.5cm',
            line2: 'Bottom: 9.5cm',
            line3: 'Height: 10.0cm'
        },
        carton_size: '65x26x63cm',
        gw: '11.9KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product71',
        name: '32oz Noodle Box',
        image: noodlebox3,
        category: 'noodle box',
        size: {
            line1: 'Top: 17.9cm',
            line2: 'Bottom: 14.5cm',
            line3: 'Height: 16.3cm'
        },
        carton_size: '67x27.5x65cm',
        gw: '14KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product72',
        name: '8 Inch Pizza Box',
        image: pizzabox1,
        category: 'pizza box',
        size: {
            line1: 'Top: 21.5cm',
            line2: 'Bottom: 21.5cm',
            line3: 'Height: 4.5cm'
        },
        carton_size: '66x31x42cm',
        gw: '8.5KG',
        pc: '230PCS/CTN'
    },
    {
        _id: 'product73',
        name: '9 Inch Pizza Box',
        image: pizzabox2,
        category: 'pizza box',
        size: {
            line1: 'Top: 24.0cm',
            line2: 'Bottom: 24.0cm',
            line3: 'Height: 4.5cm'
        },
        carton_size: '66x31x42cm',
        gw: '9KG',
        pc: '230PCS/CTN'
    },
    {
        _id: 'product74',
        name: '12 Inch Pizza Box',
        image: pizzabox3,
        category: 'pizza box',
        size: {
            line1: 'Top: 30.5cm',
            line2: 'Bottom: 30.5cm',
            line3: 'Height: 4.5cm'
        },
        carton_size: '79x37.5x42cm',
        gw: '13KG',
        pc: '230PCS/CTN'
    },
    {
        _id: 'product75',
        name: '16 Inch Pizza Box',
        image: pizzabox4,
        category: 'pizza box',
        size: {
            line1: 'Top: 40.5cm',
            line2: 'Bottom: 40.5cm',
            line3: 'Height: 4.5cm'
        },
        carton_size: '99x47.5x42cm',
        gw: '20KG',
        pc: '230PCS/CTN'
    },
    {
        _id: 'product76',
        name: '32oz Popcorn Bucket',
        image: popcorn1,
        category: 'popcorn bucket',
        size: {
            line1: 'Top: 11.5cm',
            line2: 'Bottom: 8.8cm',
            line3: 'Height: 14.5cm'
        },
        carton_size: '59x24.5x58cm',
        gw: '8.5KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product77',
        name: '46oz Popcorn Bucket',
        image: popcorn2,
        category: 'popcorn bucket',
        size: {
            line1: 'Top: 12.0cm',
            line2: 'Bottom: 8.7cm',
            line3: 'Height: 17.6cm'
        },
        carton_size: '62x25x62cm',
        gw: '9.3KG',
        pc: '500PCS/CTN'
    },
    {
        _id: 'product78',
        name: 'Paper Box',
        image: chickenpaperbox,
        category: 'chicken box',
        size: {
            line1: 'Length: 17.0x13.5cm',
            line2: 'Width: 12.1x15.3cm',
            line3: 'Height: 6.3cm'
        },
        carton_size: '45x40x62cm',
        gw: '15KG',
        pc: '300PCS/CTN'
    },
    {
        _id: 'product79',
        name: 'Paper Box 2',
        image: chickenpaperbox,
        category: 'chicken box',
        size: {
            line1: 'Length: 16cm',
            line2: 'Width: 8.5cm',
            line3: 'Height: 6cm'
        },
        carton_size: '52x35x42cm',
        gw: '23KG',
        pc: '1200PCS/CTN'
    },
    {
        _id: 'product80',
        name: 'Paper Box 3',
        image: chickenpaperbox,
        category: 'chicken box',
        size: {
            line1: 'Length: 22cm',
            line2: 'Width: 13.5cm',
            line3: 'Height: 6cm'
        },
        carton_size: '52.5x37.5x42cm',
        gw: '45KG',
        pc: '1000PCS/CTN'
    },
    {
        _id: 'product81',
        name: 'Paper Box 4',
        image: chickenpaperbox,
        category: 'chicken box',
        size: {
            line1: 'Length: 17.5cm',
            line2: 'Width: 11cm',
            line3: 'Height: 6cm'
        },
        carton_size: '37x34x52cm',
        gw: '35KG',
        pc: '1000PCS/CTN'
    },
    {
        _id: 'product82',
        name: 'Burger Box',
        image: burgerbox,
        category: 'chicken box',
        size: {
            line1: 'Length: 10cm',
            line2: 'Width: 10cm',
            line3: 'Height: 6.5cm'
        },
        carton_size: '51x25x65cm',
        gw: '15KG',
        pc: '1000PCS/CTN'
    },
    {
        _id: 'product83',
        name: 'Burger Box 2',
        image: burgerbox,
        category: 'chicken box',
        size: {
            line1: 'Length: 21cm',
            line2: 'Width: 13cm',
            line3: 'Height: 11cm'
        },
        carton_size: '52x35x42cm',
        gw: '29KG',
        pc: '500PCS/CTN'
    },
    // {
    //     _id: 'product84',
    //     name: '12oz',
    //     image: doc1,
    //     category: 'chicken box',
    //     size: {
    //         line1: 'Top: 8.7cm',
    //         line2: 'Bottom: 6.6cm',
    //         line3: 'Height: 7.0cm'
    //     },
    //     carton_size: '50x50x21cm',
    //     gw: '6.3KG',
    //     pc: '500PCS/CTN'
    // },
]