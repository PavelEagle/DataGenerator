import * as React from 'react';
import { connect } from 'react-redux';

const initialFormData = Object.freeze({
    DbName: "test",
    DataSource: "test"
});

const Home = () => {
    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e: any) => {
        updateFormData(({
            [e.target.name]: e.target.value.trim()
        }) as any);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <h1>Data Generator</h1>
            <p>Data source:
                <input name="DataSource" onChange={handleChange} type="text"></input></p>
            <p>Db name:
                <input name="DbName" onChange={handleChange} type="text"></input></p>
            <button type="button"
                    className="btn btn-primary btn-lg"
                    onClick={handleSubmit}>
                GetData
            </button>
        </div>
    );
};



export default connect()(Home);
