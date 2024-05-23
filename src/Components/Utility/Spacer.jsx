const Spacer = ({width, height}) => {
    const style = {
        display: 'inline-block',
        width: width || '0px',
        height: height || '0px',
    };

    return <div style={style}></div>;
};

export default Spacer;