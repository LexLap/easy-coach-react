import { Scrollbars } from 'react-custom-scrollbars';

const ScrollableContainer = (props) => {

    const renderThumb = ({ style, ...props }) => {
        const thumbStyle = {
            borderRadius: 6,
            backgroundColor: "rgb(122,121,221)",
            position: 'relative',
            top: '2px'
        };
        return <div style={{ ...style, ...thumbStyle }} {...props} />;
    };

    const CustomScrollbars = props => (
        <Scrollbars
            renderThumbHorizontal={renderThumb}
            renderThumbVertical={renderThumb}
        >
            {props.children}
        </Scrollbars>
    );

    return (
        <CustomScrollbars >
            {props.children}
        </CustomScrollbars>
    )
}


export default ScrollableContainer