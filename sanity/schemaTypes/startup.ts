import {defineField,defineType} from "sanity"
export const startup = defineType({
    name:"startup",
    title:"Startup",
    type:"document",
    fields:[
        defineField({
            name:"slug",
            type:"slug",
            options:{
                source:'title'
            }
        }),
        defineField({
            name:"title",
            type:"string"
        }),
        defineField({
            name:"author",
            type:"reference",
            to:{type:"author"}
        }),
        defineField({
            name:"views",
            type:"number"
        }),
        defineField({
            name:"description",
            type:"text"
        }),
        defineField({
            name:"category",
            type:"string",
            validation:(Rule)=>Rule.min(1).max(20).required().error('Please enter a category') 
        }),
        defineField({
            name: "image",
            type: "image", // Change to 'image' type
            title: "Image",
            options: {
              hotspot: true, // Enable hotspot for better cropping control
            },
            fields: [
              defineField({
                name: "alt",
                type: "string",
                title: "Alternative Text",
                description: "Short description of the image for accessibility and SEO",
                validation: (Rule) => Rule.required().error("Alt text is required for accessibility."),
              }),
            ],
            validation: (Rule) => Rule.required().error("An image is required."),
          }),
        defineField({
            name:"Pitch",
            type:"markdown",
        }),
    ],
    preview:{
        select:{
            title:"name",
        }
    }

})