import React from 'react';
import './InfoBox.css';
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total, isRed, active, ...props }) {
    return (
        <Card onClick={props.onClick} className={`infobox ${active && "infobox--selected"} ${isRed && "infobox--red"}`} >
            <CardContent>
                <Typography color="textSecondary" className="infobox__title">
                    {title}
                </Typography>

                <h2 className={`infobox__cases ${!isRed && "infobox__cases--green"}`}>{cases}</h2>

                <Typography color="textSecondary" className="infobox__total">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox;
