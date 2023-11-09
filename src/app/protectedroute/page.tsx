import List from "@/component/list/list";
import TabsContentSection from "@/component/section/TabsContentSection";

export default function ProtectedRoute() {



    let tabs = [
        {
            id: "photos",
            label: "Photos",
            content: [
                "A stunning photo of a sunrise over a mountain range, capturing the vibrant colors and the serene beauty of nature.",
                "A nighttime shot of a bustling city, with skyscrapers illuminated against the dark sky.",
                "A close-up shot of a majestic lion in the wild, showcasing its strength and beauty.",
                "A detailed photo of a dewdrop on a leaf, highlighting the intricate patterns of nature.",
                "A black and white portrait of an elderly person, capturing their wisdom and life experiences.",
                "An action shot of a football player mid-kick, capturing the intensity and excitement of the game.",
                "A mouth-watering photo of a gourmet dish, showcasing the colors and textures of the food.",
                "A photo of a famous landmark, like the Eiffel Tower or the Great Wall of China.",
                "A breathtaking underwater photo capturing the vibrant colors and diverse life of a coral reef.",
                "A heartwarming photo of a mother and child sharing a moment of love and affection.",
                "A thrilling photo of a roller coaster ride, capturing the excitement and adrenaline rush.",
                "A serene photo of a Buddhist temple in the mountains, surrounded by autumn foliage.",
                "A captivating photo of a ballet dancer mid-performance, showcasing grace and elegance.",
                "A mesmerizing photo of the Milky Way, capturing the vastness and beauty of the universe.",
                "A charming photo of a quaint little cottage in the countryside, surrounded by wildflowers.",
                "A dramatic photo of a thunderstorm over the ocean, capturing the raw power of nature."
            ]
        },
        {
            id: "music",
            label: "Music",
            content: [
                "A soulful blues track that takes you back to the roots of American music.",
                "A lively pop song with catchy lyrics and a foot-tapping rhythm.",
                "A classical symphony by Mozart that showcases his musical genius.",
                "A rock anthem with powerful guitar riffs and a memorable chorus.",
                "A relaxing jazz piece perfect for a quiet evening at home.",
                "A hip-hop track with clever wordplay and a strong beat.",
                "An electronic dance music (EDM) track that gets the party started.",
                "A country song that tells a heartfelt story of love and loss.",
                "A reggae track that transports you to the sunny beaches of Jamaica.",
                "A heavy metal song with intense drums and aggressive vocals.",
                "A folk song with beautiful harmonies and acoustic instruments.",
                "A punk rock track that embodies the spirit of rebellion.",
                "A salsa song that makes you want to get up and dance.",
                "A rap song with a social message and a catchy hook.",
                "A romantic ballad that speaks to the heart.",
                "An indie track with a unique sound and thought-provoking lyrics."
            ]
        },
        {
            id: "videos",
            label: "Videos",
            content: [
                "The sun rises in the east and sets in the west, painting the sky with hues of orange and pink.",
                "In the heart of the city, the hustle and bustle never cease, and every corner is filled with stories waiting to be told.",
                "The tranquility of the countryside, with its sprawling fields and clear blue skies, offers a peaceful retreat from the urban jungle.",
                "The majestic mountain stands tall, its peak shrouded in mist, a testament to nature's awe-inspiring beauty.",
                "The ocean, vast and deep, holds a world of wonders beneath its surface, teeming with life of all shapes and sizes.",
                "In the realm of technology, innovation is the key to progress, pushing the boundaries of what is possible.",
                "Art, in its many forms, captures the human experience, expressing emotions and ideas that words often cannot.",
                "Music, the universal language, has the power to move us, transcending barriers and bringing people together.",
                "Literature opens a window to different worlds, cultures, and perspectives, enriching our understanding and empathy.",
                "The pursuit of knowledge is a lifelong journey, filled with challenges, discoveries, and moments of enlightenment.",
                "In the game of chess, strategy and foresight are paramount, mirroring the complexities of life decisions.",
                "Cooking is a blend of science and art, where creativity meets technique, resulting in dishes that delight the senses.",
                "Travel broadens the mind, exposing us to new experiences, cultures, and ways of life, fostering growth and understanding."
            ]
        },
    ];

    // const post = async () => {

    //     try {
    //         // const res = await axiosAuth.get(`/users`)
    //         // setData(res.data)
    //         const res = await instance.get(`/users`)
    //         setData(res.data)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    return (
        <main className="h-full">
            {/* <div className="flex justify-center w-full mt-5">
                <h1>Protected Route</h1>
                <button className="bg-white" onClick={post}>c</button>
                {data && <div>{JSON.stringify(data)}</div>}
                <button onClick={() => setData(null)}>clear</button>
            </div> */}
            <div className="flex justify-center mt-10">
                <div className="flex w-[90vw]">
                    <TabsContentSection itemtab={tabs} Component={List} />
                </div>
            </div>
        </main>
    )
}





