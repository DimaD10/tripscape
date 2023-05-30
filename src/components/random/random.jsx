import classes from './random.module.scss';
import RandomCard from '../random-card/random-card.jsx';

const cardsContent = [
    {image: "./img/popular-card/img1.jpg", title: "Santorini. Greece", about: "Santorini is a volcanic island in the Aegean Sea, located in southwestern Greece. This island is one of the most popular tourist destinations in Greece thanks to its crystal clear waters, white sand and incredible sea views."},
    {image: "./img/popular-card/img3.webp", title: "Maldives", about: "The Maldives is a tropical island nation located in the Indian Ocean, known for its stunning natural beauty, white-sand beaches, and crystal-clear waters. With over 1,000 coral islands, it is a popular destination for snorkeling, diving, and other water-based activities. The Maldives is also home to luxurious overwater bungalows, making it a popular honeymoon destination."},
    {image: "./img/popular-card/img4.jpg", title: "Sicily. Italy", about: "Sicily is a beautiful island off the southern coast of Italy, known for its diverse landscapes, rich history, and delicious cuisine. Visitors can enjoy stunning beaches, rugged mountains, and active volcanoes, as well as explore ancient temples, amphitheaters, and cathedrals. The island's cuisine is famous for its fresh seafood, pastries, and wines."},
    {image: "./img/popular-card/img2.jpeg", title: "Phi Phi Islands. Thailand", about: "Phi Phi Islands is a small archipelago in Thailand, located in the Andaman Sea. It is known for its breathtaking beaches, crystal-clear waters, and stunning natural beauty. The islands offer a range of activities, including snorkeling, diving, and rock climbing, making it a popular destination for tourists."},
    {image: "./img/random-card/istambul.jpg", title: "Istanbul. Turkey", about: "Istanbul is a captivating city that sits at the crossroads of Europe and Asia, offering a unique blend of cultures and histories. Its stunning architecture, bustling markets, and delicious cuisine make it a must-visit destination for any traveler. Be sure to visit iconic landmarks such as the Hagia Sophia and the Blue Mosque, take a stroll through the vibrant streets of the Grand Bazaar, and indulge in some of the city's famous Turkish coffee and baklava."},
    {image: "./img/random-card/costa-brava.webp", title: "Costa Brava. Spain", about: "Costa Brava is a beautiful coastal region in northeastern Spain, with stunning beaches, charming fishing villages, and plenty of outdoor activities. It's a great destination for adventure-seekers and beach lovers, and offers delicious seafood and local wines to enjoy."},
    {image: "./img/random-card/Miami.jpg", title: "Miami. USA", about: "Miami is a dynamic and vibrant city located in southeastern Florida, famous for its stunning beaches, art deco architecture, diverse culinary scene, and lively nightlife. It's a great destination for travelers looking for sun, fun, and culture."},
    {image: "./img/random-card/Montreux.jpg", title: "Montreux. Switzerland", about: "Costa Brava is a beautiful coastal region in northeastern Spain, with stunning beaches, charming fishing villages, and plenty of outdoor activities. It's a great destination for adventure-seekers and beach lovers, and offers delicious seafood and local wines to enjoy."},
]

const Random = () => {
    return (
        <div className={classes.random}>
            <div className={classes.random__container}>
                <div className={classes.popularHead}>
                    <h2 className={classes.title}>
                        Random tours
                    </h2>
                </div>
                <div className={classes.popularMain}>
                    {cardsContent.map((obj) => (
                        <RandomCard key={obj.title} title={obj.title} image={obj.image} about={obj.about} />
                    ))}
                </div>
                <a href='#' className={`${classes.more} ${classes._main}`}>Load more</a>
            </div>
        </div>
    );
}

export default Random;