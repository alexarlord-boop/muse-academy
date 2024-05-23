import ProductCard from "./ProductCard";

export default function BlogListSection() {
    return (
        <div className="BlogListSection">

            <ProductCard
                imgSrc={"#FFC800"}
                title="Ultimate Guitar"
                text="The best platform for music makers to play songs they love. Home to the world's largest music community."
            />

            <ProductCard
                imgSrc={"#2E68C0"}
                title="MuseScore"
                text="Create, play back, and print sheet music with free open source notation software."
            />

            <ProductCard
                imgSrc={"#EA1542"}
                title="audio.com"
                text="The easiest way to share any sound online."
            />

            <ProductCard
                imgSrc={"#1D4ED8"}
                title="Audacity"
                text="The world's most popular audio editing and recording app."
            />

        </div>
    );
}
