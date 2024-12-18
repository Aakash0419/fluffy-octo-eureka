import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../components/ui/button'; // Import Button directly from the package
import {EyeIcon} from 'lucide-react'
import {formatdate} from '@/lib/utils'
import { Author, Startup } from '@/sanity/types'
export type StartupTypeCard = Omit<Startup,"author"> & {author?:Author}
const Startupcard = ({post}:{post:StartupTypeCard}) => {
    const {_createdAt 
        , views ,
         author,
         title,
         category,
         _id,
         image,
         description
        } = post
  return (
    <>
        <li className="startup-card group">
            <div className = "flex-between">
                <p className="startup_car_date">
                    {formatdate(_createdAt)}</p>
                    <div className="flex gap-1.5">
                        <EyeIcon className="size-6 text-primary">
                            <span>{views}</span>
                        </EyeIcon>
                </div>
            </div>
            <div className="flex-betweem mt-5 gap-5" >
                <div className="flex-1">
                    <Link href={`/user/${author?._id}`}>
                        <p className="text-16-medium line-clamp-1">
                            {author?.Name}
                        </p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <h3 className="text-26-semibold line-clamp-1">{title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${author?._id}`}>
                    <Image src="" alt="placeholder" width={48} height={48} className="rounded-full"/>
                </Link>
            </div>
            <div>
                <Link href={`/startup/${_id}`}>
                    <p className="startup-card_desc">
                        {description}
                    </p>
                    <Image src={image} alt="placeholder" className="startup-carc_img" />
                </Link>
                <div className="flex-between gap-5">
                    <Link href={`/?query/${category?.toLowerCase()}.`}>
                        <p className="text-16-medium">{category}</p>
                    </Link>
                    <Button className="startup-card_btn" asChild>
                        <Link href={`/startup/${_id}`}>
                            Details
                        </Link>
                    </Button>
                </div>
            </div>
        </li>
    </>
  )
}

export default Startupcard
