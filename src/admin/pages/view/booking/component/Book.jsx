import { useState, useEffect } from 'react';
import axios from 'axios';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [editingTestimonial, setEditingTestimonial] = useState(null);
    const [updatedText, setUpdatedText] = useState('');

    // Fetch all testimonials
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get('https://backendproject-8m9r.onrender.com/Booking');
                setTestimonials(response.data);
            } catch (error) {
                console.error('Error fetching booking:', error);
            }
        };

        fetchTestimonials();
    }, []);

    // Delete a testimonial
    const deleteTestimonial = async (id) => {
        try {
            await axios.delete(`https://backendproject-8m9r.onrender.com/Booking/${id}`);
            setTestimonials(testimonials.filter((t) => t.id !== id));
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
    };

    // Start editing a testimonial
    const startEditing = (testimonial) => {
        setEditingTestimonial(testimonial);
        setUpdatedText(testimonial.text);
    };

    // Update a testimonial
    const updateTestimonial = async () => {
        try {
            const updatedTestimonial = {
                ...editingTestimonial,
                text: updatedText,
            };
            await axios.put(`https://backendproject-8m9r.onrender.com/Booking/${editingTestimonial.id}`, updatedTestimonial);
            setTestimonials(
                testimonials.map((t) =>
                    t.id === editingTestimonial.id ? updatedTestimonial : t
                )
            );
            setEditingTestimonial(null);
            setUpdatedText('');
        } catch (error) {
            console.error('Error updating booking:', error);
        }
    };

    return (
        <div>
            <h1>Booking Page</h1>
            {testimonials.length > 0 ? (
                <ul>
                    {testimonials.map((testimonial) => (
                        <li key={testimonial.id}>
                            {editingTestimonial?.id === testimonial.id ? (
                                <div>
                                    <textarea
                                        value={updatedText}
                                        onChange={(e) => setUpdatedText(e.target.value)}
                                    />
                                    <button onClick={updateTestimonial}>Save</button>
                                    <button onClick={() => setEditingTestimonial(null)}>
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <p>{testimonial.text}</p>
                                    <button onClick={() => startEditing(testimonial)}>Edit</button>
                                    <button onClick={() => deleteTestimonial(testimonial.id)}>
                                        Delete
                                    </button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No testimonials found.</p>
            )}
        </div>
    );
};

export default Testimonials;
