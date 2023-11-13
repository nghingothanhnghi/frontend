



import { useState, useEffect } from "react";
import CategoryDataService from "../../services/category.service";



export default function CategoriesList() {
    const [categories, setCategories] = useState([]);

    const retrieveCategories = () => {
        CategoryDataService.getAll()
            .then((response: any) => {
                setCategories(response.data);
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    useEffect(() => {
        retrieveCategories();
    }, []);

    return (
        <div>
            <div>
                <h4>Popular</h4>
                <ul>
                    {categories &&
                        categories.map((post, index) => (
                            <li key={index}>
                                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                    </a>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};


