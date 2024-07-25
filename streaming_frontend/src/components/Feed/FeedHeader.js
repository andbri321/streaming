import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GridSvg from "./../Svg/GridSvg";
import ListSvg from "./../Svg/ListSvg";

const FeedHeader = ({ feed_grid,handleClick }) => {
    return (
        <header>
            <Row className="justify-content-end" >
                <Col 
                    className="mt-2 text-end col-10 col-sm-11 col-md-11 col-lg-11 col-xl-11"
                    onClick={() => handleClick(true)}
                >
                    <GridSvg feed_grid={feed_grid} />
                </Col>
                <Col 
                    className="mt-2 text-end col-2 col-sm-1 col-md-1 col-lg-1 col-xl-1"
                    onClick={() => handleClick(false)}
                >
                    <ListSvg feed_grid={feed_grid} />
                </Col>
            </Row>
        </header>
    )
}

export default FeedHeader;