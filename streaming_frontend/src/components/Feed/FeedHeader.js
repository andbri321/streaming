import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GridSvg from "./../Svg/GridSvg";
import ListSvg from "./../Svg/ListSvg";

const FeedHeader = () => {
    return (
        <header>
            <Row className="justify-content-end" >
                <Col className="mt-2 col col-2 col-sm-1 text-end" >
                    <GridSvg />
                </Col>
                <Col className="mt-2 col-2 col-sm-1 text-end" >
                    <ListSvg />
                </Col>
            </Row>
        </header>
    )
}

export default FeedHeader;