import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Content, Heading1, Heading2, Title, SliderContainer, Dot } from "./HeaderStyle";
import { GrNext, GrPrevious } from "react-icons/gr";


const Header = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dotsClass: 'slick-dots header__dots',
        className: "slides",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: dots => <ul style={{ bottom: '5%' }}>{dots}</ul>,
        // eslint-disable-next-line no-unused-vars
        customPaging: i => (
            <div style={{}}>
                <Dot className="dot"></Dot>
            </div>
        )
    };

    return (
        <SliderContainer>
            <Slider {...settings}>
                <Title>
                    <Content>
                        <Heading1>استشارتك </Heading1>
                        <Heading2>مجانية</Heading2>
                    </Content>
                </Title>
                <Title>
                    <Content>
                        <Heading1>استشارتك </Heading1>
                        <Heading2>مجانية</Heading2>
                    </Content>
                </Title>
                <Title>
                    <Content>
                        <Heading1>استشارتك </Heading1>
                        <Heading2>مجانية</Heading2>
                    </Content>
                </Title>
            </Slider>
        </SliderContainer >
    )
}

// eslint-disable-next-line react/prop-types, no-unused-vars
function SampleNextArrow({ className, style, onClick }) {
    return (
        <div onClick={onClick} className={`arrow ${className}`} >
            <GrNext className="arrows" />
        </div>
    )
}

const SamplePrevArrow = (props) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className={`arrow ${className}`} >
            <GrPrevious className="arrows" />
        </div>
    )
}

export default Header
