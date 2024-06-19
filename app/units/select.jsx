import AsyncSelect from 'react-select/async';
import { useState } from 'react';


const env = process.env.NEXT_PUBLIC_VERCEL_ENV;
var baseURL = "";

if (env === "production") {
    baseURL = "https://www.unitrack.au";

} else if (env === "preview") {
    baseURL = `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}`;

} else if (env === "development") {
    baseURL = "https://localhost:3000";
}

const UnitSelect = () => {
    const [selectedUnit, setSelectedUnit] = useState('');

    const loadOptions = async (inputValue) => {
        console.log(inputValue);
        try {
            const response = await fetch(`${baseURL}/api/getUnits?searchUnit=${inputValue}`);
            const resp = await response.json();
            // console.log(data);
            const data = resp.data.map((item) => ({value: item.uoscode, label: item.uoscode}));
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error fetching units:', error);
            return [];
        }
    };

    const handleOnChange = (selectedOption) => {
        setSelectedUnit(selectedOption ? selectedOption.label : '');
    };

    return (
        <div>
            <AsyncSelect
                cacheOptions
                loadOptions={loadOptions}
                defaultOptions
                value={selectedUnit}
                onChange={handleOnChange}
                placeholder="Search for a unit..."
            />
            {selectedUnit && <div>You selected: {selectedUnit}</div>}
        </div>
    );
};

export default UnitSelect;
