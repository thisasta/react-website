import Card from "./Card.tsx";
import porsche from "../assets/porsche-model.png";
import bmw from "../assets/bmw-model.png";
import audi from "../assets/audi-model.webp"

function Car() {
    const car1 = "Porsche";
    const car2 = "BMW";
    const car3 = "Audi";

    return(
        <div className="flex-col font-poppins bg-gray-800 text-white p-5 h-dvh">
            <ul className="flex gap-20 my-10 justify-around">
                <li>
                    <Card title={car1} url="https://www.porsche.com/" picture={porsche}>
                        Best Car which was ever built.
                    </Card>
                </li>
                <li>
                    <Card title={car2} url="https://www.bmw.de/" picture={bmw}>
                        It is Porsche but for less money.
                    </Card>
                </li>
                <li>
                    <Card title={car3} picture={audi} url={"https://www.audi.de/de/brand/de.html"}>
                        Drivers of that car tend to think they are special just because all four of their wheels are
                        connected to the engine.
                    </Card>
                </li>
                <li>
                    <Card title={car3} picture={audi} url={"https://www.audi.de/de/brand/de.html"}>
                        Drivers of that car tend to think they are special just because all four of their wheels are
                        connected to the engine.
                    </Card>
                </li>
            </ul>
            <ul className="flex gap-20 justify-around">
                <li>
                    <Card title={car3} picture={audi} url={"https://www.audi.de/de/brand/de.html"}>
                        Drivers of that car tend to think they are special just because all four of their wheels are
                        connected to the engine.
                    </Card>
                </li>
                <li>
                    <Card title={car3} picture={audi} url={"https://www.audi.de/de/brand/de.html"}>
                        Drivers of that car tend to think they are special just because all four of their wheels are
                        connected to the engine.
                    </Card>
                </li>
                <li>
                    <Card title={car3} picture={audi} url={"https://www.audi.de/de/brand/de.html"}>
                        Drivers of that car tend to think they are special just because all four of their wheels are
                        connected to the engine.
                    </Card>
                </li>
                <li>
                    <Card title={car3} picture={audi} url={"https://www.audi.de/de/brand/de.html"}>
                        Drivers of that car tend to think they are special just because all four of their wheels are
                        connected to the engine.
                    </Card>
                </li>
            </ul>
        </div>
    );
}

export default Car;