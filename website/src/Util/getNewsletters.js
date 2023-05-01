import image from "../Images/Client_pic_1_PNG.png";
const defaultImage = image;
const testimonials = [];
export async function getNewsletters(){
    let response = await fetch("/allNewsletters");
    let newsletters = await response.json();
    let image = defaultImage;
    for(let i=0; i<newsletters.length; i++){
        if(newsletters[i].image != null){
            image = newsletters[i].image;
        }
        var data = {
            imageSrc: image,
            quote: newsletters[i].message,
            customerName: "Gia Adornetto",
            customerTitle: "Communication in AACtion"
        };
        testimonials.push(JSON.stringify(data));
    }
    return testimonials
}