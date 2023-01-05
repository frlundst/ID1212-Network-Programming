interface DotProps {
    size: string;
    className?: string;
    numberAvailable: number;
}

function Dot(props: DotProps) {
    const color = props.numberAvailable < 10 ? (props.numberAvailable === 0 ? "red" : "yellow") : "green";

    return <div
        style={{
            width: props.size,
            height: props.size,
            borderRadius: "50%",
            backgroundColor: color
        }}
        className={props.className}
    />
}

export default Dot;