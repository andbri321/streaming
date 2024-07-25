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
                    className="mt-2 col col-2 col-sm-1 text-end"
                    onClick={() => handleClick(true)}
                >
                    <GridSvg feed_grid={feed_grid} />
                </Col>
                <Col 
                    className="mt-2 col-2 col-sm-1 text-end"
                    onClick={() => handleClick(false)}
                >
                    <ListSvg feed_grid={feed_grid} />
                </Col>
            </Row>
        </header>
    )
}

export default FeedHeader;