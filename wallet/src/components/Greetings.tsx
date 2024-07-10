import {
    Box,
    Typography
} from "@mui/material";

interface GreetingsProps {
    name?: string
}

const Greetings = ({ name }: GreetingsProps) => {
    return (
        <Box
            sx={{
                mb: 1
            }}
        >
            <Box display="flex" alignItems="center">
                <Typography variant="h4" fontWeight="500">
                    {name ? `Hello, ${name}` : "Hello"}
                </Typography>
            </Box>
        </Box>
    )
}

export default Greetings