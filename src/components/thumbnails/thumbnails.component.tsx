import React from "react";
import router from "next/router";
import { TThumbnailsProps } from "./thumbnails.definition";
import { TPet } from "../../layouts/creat-pet-form/creat-pet-form.definition";
import { TUser } from "../../../dummy-data/dummy-data";
import { Buttons } from "../buttons/buttons.component";
import { RoundImage } from "../round-image/round-img.component";
import * as S from "./thumbnails.style";

export function Thumbnails({data, isForPets, className}: TThumbnailsProps){

    {if(isForPets){
        return(
            <S.Thumbnails data={data} className={className} isForPets>
                
                {data.map((pet:TPet, id:number) => {
                    return(
                    <RoundImage
                        src={pet.profilePic}
                        diameter={120}
                        caption={pet.name}
                        className="petPic"
                        isPet={true}
                        onClick={() =>
                           router.push(`/pet-profile/${pet.id}`, undefined, {
                              shallow: true,
                           })
                        }
                        key={id}
                    />)
                    })}
                
                <Buttons
                       dark={false}
                       className={!data ? "centeredButton": ""}
                       onClick={() =>
                          router.push("/create-pet", undefined, {
                             shallow: true,
                          })
                       }
                    >
                       +
                    </Buttons>
            </S.Thumbnails>
        )
    }
    
    return(
        <S.Thumbnails data={data} className={className} isForPets>
            {data.map((user:TUser, id:number) => {
                return(
                <RoundImage
                    src={user.profilePic}
                    diameter={120}
                    caption={user.firstName}
                    className="petPic"
                    isPet={false}
                    onClick={() =>
                       router.push(`/user-profile/${user.id}`, undefined, {
                          shallow: true,
                       })
                    }
                    key={id}
                />)
                })}

                <Buttons
                   dark={false}
                   className={!data ? "centeredButton": ""}
                   onClick={() =>
                      router.push("/create-pet", undefined, {
                         shallow: true,
                      })
                   }
                >
                   +
                </Buttons>
        </S.Thumbnails>
    )

    }
}