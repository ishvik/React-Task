import React, { useState } from 'react'
import Row from './Row'
import { TextField, makeStyles, InputLabel, FormControl, Select, Switch, FormControlLabel, Button } from '@material-ui/core';
import "./style.css";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    formControl: {
        margin: theme.spacing(0.5),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    },
}));

function DetailsPage() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        platform: '',
        name: 'hai',
        deliveryType: ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
        console.log(state.platform);
    };

    const [row, setRow] = useState([{
        productName: '',
        cost: '',
        link: '',
    }]);
    const addRow = () => {
        const rows = [...row,
        {
            productName: '',
            cost: '',
            link: '',
        }];
        setRow(rows);
    };

    const updateValue1 = (e, idx) => {
        const rows = [...row];
        rows[idx].productName = e.target.value;
        setRow(rows);
    };

    const updateValue2 = (e, idx) => {
        const rows = [...row];
        rows[idx].cost = e.target.value;
        setRow(rows);
    };

    const updateValue3 = (e, idx) => {
        const rows = [...row];
        rows[idx].link = e.target.value;
        setRow(rows);
    };

    const deleteValue = () => {
        const rows = [...row];
        rows.pop();
        setRow(rows);
    }

    const handleUpload = (e)=>{
        if(row.length > 1){
            setFile(e.target.files);
        }
    }
    
    const saveInfo = ()=>{
        let bucketName1 = 'campInfo'
        let campInfo = "campaign Name "+campName+" "+"Campaign Description : "+campDesc+" "+"Platform : "+platform+" StartDate : "+startDate+" EndDate : "+endDate;
        let storageRef1 = firebase.storage().ref(`${bucketName1}/${campInfo}`)
        storageRef1.put(campInfo);
        let bucketName2 = 'product'
        let storageRef2 = fireabse.storage().ref(`${bucketName2}/${row}`)
        storageRef2.put(rows);
    }

    //for campaign Info
    const [campName, setCampName] = useState(' ');
    const [campDesc, setcampDesc] = useState(' ');
    const [startDate, setStartDate] = useState(' ');
    const [endDate, setEndDate] = useState(' ');

    //for deliverables info
    const [addInstruct, setaddInstruct] = useState(' ');
    const [addDo, setAddDo] = useState(' ');
    const [addDont, setAddDont] = useState(' ');

    const [file,setFile] = useState(' ');
    console.log(file[0].name);
    return (
        <div className="container">
            <div className="campaign-info">
                <div className="title">
                    <div className="bullets">1</div>
                    <h2>Campaign Info</h2>
                </div>
                <div className="campaign-list">
                    <div className="campaignName">
                        <p>Campaign Name</p>
                        <TextField id="outlined-basic" value={campName} label="Campaign 1.0" variant="outlined" onChange={(e) => {
                            setCampName(e.target.value)
                        }} />
                    </div>
                    <div className="platform">
                        <p>Select Platform</p>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select native value={state.platform} onChange={handleChange}
                                inputProps={{
                                    name: 'platform',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value="Facebook">Facebook</option>
                                <option value="twitter">twitter</option>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="campDescr">
                        <p>Campaign Description</p>
                        <TextField id="outlined-basic" value={campDesc} label="Awareness Campaign" variant="outlined" onChange={(e) => { setcampDesc(e.target.value) }} />
                    </div>
                    <div className="startDate">
                        <p>Start Date</p>
                        <TextField id="date" type="date" value={startDate} defaultValue="yy-mm-dd" className={classes.textField} InputLabelProps={{ shrink: true, }} onChange={(e) => { setStartDate(e.target.value) }} />
                    </div>
                    <div className="endDate">
                        <p>End Date</p>
                        <TextField id="date" type="date" value={endDate} defaultValue="yy-mm-dd" className={classes.textField} InputLabelProps={{ shrink: true, }} onChange={(e) => { setEndDate(e.target.value) }} />
                    </div>
                </div>
            </div>
            <div className="product">
                <div className="title">
                    <div className="bullets">2</div>
                    <h2>Product/Service</h2>
                </div>
                <div className="product-list">
                    <div>
                        {row?.map((rule, idx) => {
                            return (
                                <Row
                                    key={idx}
                                    productName={row.productName}
                                    cost={row.cost}
                                    link={row.link}
                                    onChange1={(e) => updateValue1(e, idx)}
                                    onChange2={(e) => updateValue2(e, idx)}
                                    onChange3={(e) => updateValue3(e, idx)}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="addRemove">
                        <p onClick={addRow}>Add products</p>
                        <p className="add" onClick={addRow}>+</p>
                        <p className="remove" onClick={deleteValue}>Remove</p>
                </div>
                <div className="toggleBtn" >
                    <FormControlLabel control={<Switch />} className="toggle" />
                </div>
                <div className="review">
                    <p>Self Order for review</p>
                </div>
            </div>
            <div className="deliver">
                <div className="title">
                    <div className="bullets">3</div>
                    <h2>Deliverables</h2>
                </div>
                <div className="deliType">
                    <p>Deliverable Type</p>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <Select native value={state.deliveryType} onChange={handleChange}
                            inputProps={{
                                name: 'deliveryType',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value="Facebook">Facebook</option>
                            <option value="twitter">twitter</option>
                        </Select>
                    </FormControl>
                </div>
                <div className="instructDo">
                    <div className="instruct">
                        <p>Add Instructions</p>
                        <input className="input-instruct input" placeholder="Add clear instructions" value={addInstruct} onChange={(e) => { setaddInstruct(e.target.value) }}></input>
                    </div>
                    <div className="do">
                        <p>Add do's</p>
                        <input className="do input" placeholder="PreAdded example Do's" value={addDo} onChange={(e) => { setAddDo(e.target.value) }}></input>
                    </div>
                    <div className="don't">
                        <p>Add dont's</p>
                        <input className="dont input" placeholder="PreAdded example Dont's" value={addDont} onChange={(e) => { setAddDont(e.target.value) }}></input>
                    </div>
                </div>
                <div className="addRemove">
                    <p>Add Deliverables</p>
                    <p className="add">+</p>
                    <p className="remove">Remove</p>
                </div>
            </div>
            <div className="refrence">
                <div className="title">
                    <div className="bullets">4</div>
                    <h2>Refrence</h2>
                </div>
                <div className="info">
                    <p>Add refrence photo/video to help out influencers!</p>
                </div>
                <div className="input-media">
                    <div className="input-field-media">
                        <div className="thumbnail">
                        <img src={file[0].name}></img>
                        </div>
                        <div className="buttons">
                            <input type="file" accept="image/png,image/jpeg,image/jpg,video/*" onChange={(e)=>{handleUpload(e)}}></input>
                            <button className="uploadBtn">Upload</button>
                            <button className="removeBtn">Remove</button>
                        </div>

                    </div>
                    <div className="input-field-media">
                        <div className="thumbnail">
                            
                        </div>
                        <div className="buttons">
                            <button className="uploadBtn">Upload</button>
                            <button className="removeBtn">Remove</button>
                        </div>

                    </div>
                    <div className="input-field-media">
                        <div className="thumbnail">

                        </div>
                        <div className="buttons">
                            <button className="uploadBtn">Upload</button>
                            <button className="removeBtn">Remove</button>
                        </div>

                    </div>
                </div>
                <div className="campaignBtn">
                    <Button variant="contained" color="primary">
                        Save Campaign
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage
