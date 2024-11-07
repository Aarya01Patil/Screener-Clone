import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Select,
    MenuItem,
    IconButton,
    Stack,
    FormControl,
    InputLabel,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { FilterCondition } from '../types/types';

const parameters = [
    'Market Capitalization (B)',
    'P/E Ratio',
    'ROE (%)',
    'Debt-to-Equity Ratio',
    'Dividend Yield (%)',
    'Revenue Growth (%)',
    'EPS Growth (%)',
    'Current Ratio',
    'Gross Margin (%)',
];

const operators = ['>', '<', '='];

interface FilterBuilderProps {
    onFilterChange: (conditions: FilterCondition[]) => void;
}

const FilterBuilder: React.FC<FilterBuilderProps> = ({ onFilterChange }) => {
    const [conditions, setConditions] = useState<FilterCondition[]>([]);

    const addCondition = () => {
        setConditions([
            ...conditions,
            { parameter: parameters[0], operator: '>', value: 0 },
        ]);
    };

    const removeCondition = (index: number) => {
        const newConditions = conditions.filter((_, i) => i !== index);
        setConditions(newConditions);
        onFilterChange(newConditions);
    };

    const updateCondition = (index: number, field: keyof FilterCondition, value: string | number) => {
        const newConditions = conditions.map((condition, i) => {
            if (i === index) {
                return { ...condition, [field]: value };
            }
            return condition;
        });
        setConditions(newConditions);
        onFilterChange(newConditions);
    };

    return (
        <Box>
            {conditions.map((condition, index) => (
                <Stack
                    key={index}
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ mb: 2 }}
                >
                    <FormControl sx={{ minWidth: 200 }}>
                        <InputLabel>Parameter</InputLabel>
                        <Select
                            value={condition.parameter}
                            label="Parameter"
                            onChange={(e) => updateCondition(index, 'parameter', e.target.value)}
                        >
                            {parameters.map((param) => (
                                <MenuItem key={param} value={param}>
                                    {param}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl sx={{ minWidth: 100 }}>
                        <InputLabel>Operator</InputLabel>
                        <Select
                            value={condition.operator}
                            label="Operator"
                            onChange={(e) => updateCondition(index, 'operator', e.target.value)}
                        >
                            {operators.map((op) => (
                                <MenuItem key={op} value={op}>
                                    {op}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField
                        type="number"
                        label="Value"
                        value={condition.value}
                        onChange={(e) => updateCondition(index, 'value', Number(e.target.value))}
                        sx={{ width: 150 }}
                    />

                    <IconButton onClick={() => removeCondition(index)} color="error">
                        <DeleteIcon />
                    </IconButton>
                </Stack>
            ))}

            <Button variant="contained" onClick={addCondition} sx={{ mt: 2 }}>
                Add Condition
            </Button>
        </Box>
    );
};

export default FilterBuilder; 