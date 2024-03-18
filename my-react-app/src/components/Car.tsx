function Car() {
    const car1 = "Porsche";
    const car2 = "bmw";

    return(
        <ul className="font-poppins">
            <li>{car1}</li>
            <li>{car2.toUpperCase()}</li>
        </ul>
    );
}

export default Car;