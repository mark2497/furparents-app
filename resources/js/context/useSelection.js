import { useState, useContext, createContext, useEffect } from "react";
import axios from 'axios';

export const DogSelectionContext = createContext();

const DogSelectionProvider = ({children}) => {
    const [breeds, setBreeds] = useState([]);
    const [breedImages, setBreedImages] = useState([]);
    const [selected, select] = useState({});
    const clear = () => {
        select({});
    };

    const fetchBreedsAndImages = async () => {
        try {
            const breedsResponse = await axios.get('/api/breed/list');
            const allBreeds = Object.keys(breedsResponse.data.message);
            setBreeds(allBreeds);
            allBreeds.map(async (breed) => {
                const imagesResponse = await axios.get(`/api/${breed}/image`);
                setBreedImages((prevState) => {
                    return ({
                        ...prevState,
                        [breed]:imagesResponse.data
                    })
                })
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const getUserSelectedBreed = async () => {
        let {data} = await axios.get('/getUserSelected');
        Object.keys(data).map((index) => {
            select(prevState => {
                return addItem(prevState, data[index].breed, '');
            });
        });
    }
  
    useEffect(() => {
        getUserSelectedBreed();
        fetchBreedsAndImages();
    }, []);

    useEffect(() => {
        console.log(breeds);
        console.log(breedImages);
    }, [breedImages]);

    const handleChangesOnSelect = (breed, image) => {
        const is_new_entry = selected[breed] === undefined;
        select(prevState => {
            if (is_new_entry) {
                if (Object.keys(selected).length === 3) {
                    return prevState
                }
                return addItem(prevState, breed, image);
            } else {
                return removeItem(prevState, breed);
            }
        });
    }

    const addItem = (prevState, breed, image) => (
        {
        ...prevState,
        [breed]: image
      });
      
      // Function to remove an item from the state
      const removeItem = (prevState, itemKey) => {
        const newState = { ...prevState };
        delete newState[itemKey];
        return newState;
      };

    return (
        <DogSelectionContext.Provider value={{breeds, setBreeds, breedImages, setBreedImages, selected, handleChangesOnSelect, clear}}>
            {children}
        </DogSelectionContext.Provider>
    );
};

const useSelection = () => {
    return useContext(DogSelectionContext);
};

export { DogSelectionProvider, useSelection };