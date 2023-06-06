import React from "react";

interface gameItemProps {
    title: string;
    releaseDate: string;
    imageLink: string;
}

export const GameItem: React.FC<gameItemProps> = ({
    title,
    releaseDate,
    imageLink,
}) => {
    return (
        <div className="bg-white rounded-md mx-2 my-3">
            <div className="flex items-center justify-center">
                <img
                    src={imageLink}
                    alt={`${title} game`}
                    className="object-cover w-96 h-96 py-5 rounded-full hover:scale-110 duration-300"
                />
            </div>
            <div>{title}</div>
            <div>{releaseDate}</div>
        </div>
    );
};
