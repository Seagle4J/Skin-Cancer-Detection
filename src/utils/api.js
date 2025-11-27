import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
    baseURL: 'http://localhost:5000', // Default backend URL, change as needed
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

export const analyzeImage = async (imageFile, metadata) => {
    const formData = new FormData();
    formData.append('image', imageFile);

    // Append metadata
    Object.keys(metadata).forEach(key => {
        formData.append(key, metadata[key]);
    });

    try {
        // Simulate API delay for demo purposes if backend is not ready
        // await new Promise(resolve => setTimeout(resolve, 2000));

        // In a real scenario, uncomment the line below:
        // const response = await api.post('/predict', formData);
        // return response.data;

        // MOCK RESPONSE FOR DEMO
        console.log("Mocking API call with:", metadata);
        await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate processing time

        // Random mock result
        const isMalignant = Math.random() > 0.5;
        return {
            label: isMalignant ? 'Malignant' : 'Benign',
            confidence: 0.85 + Math.random() * 0.14, // 0.85 - 0.99
            heatmap: null // In real app, this would be a base64 string
        };

    } catch (error) {
        console.error("Error analyzing image:", error);
        throw error;
    }
};

export default api;
