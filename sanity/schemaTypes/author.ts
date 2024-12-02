import { UserIcon } from "lucide-react"
import {defineField,defineType} from "sanity"
export const author = defineType({
    name:"author",
    title:"Author",
    type:"document",
    icon: UserIcon,
    fields:[
        defineField({
            name:"Id",
            type:"number"
        }),
        defineField({
            name:"Name",
            type:"string"
        }),
        defineField({
            name:"Username",
            type:"string"
        }),
        defineField({
            name:"Image",
            type:"url"
        }),
        defineField({
            name:"Email",
            type:"string"
        }),
        defineField({
            name:"Bio",
            type:"text"
        }),
    ],
    preview:{
        select:{
            title:"name",
        }
    }

})