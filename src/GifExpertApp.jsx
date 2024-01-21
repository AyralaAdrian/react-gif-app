import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {  

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {
        const lowerCaseNewCategory = newCategory.toLowerCase();
        if (categories.some(category => category.toLowerCase() === lowerCaseNewCategory)) return;
        setCategories([newCategory, ...categories ]);
    };
    
    return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory onNewCategory={(value) => onAddCategory(value)}/>
        {categories.map((category) => (<GifGrid key={category} category={category}/>))}
    </>
    );
};
