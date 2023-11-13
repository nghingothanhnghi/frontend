



import { Component } from "react";
import CategoryDataService from "../../services/category.service";
import ICategoryData from "../../models/category.model";

type Props = {};

type State = {
    categories: Array<ICategoryData>,
};

export default class CategoriesList extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.retrieveCategories = this.retrieveCategories.bind(this);

        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        this.retrieveCategories();
    }


    retrieveCategories() {
        CategoryDataService.getAll()
            .then((response: any) => {
                this.setState({
                    categories: response.data
                });
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }


    render() {
        const { categories } = this.state;

        return (
            <div className="list row">
                <div className="col-md-6">
                    <h3>Get quickly categories popular?</h3>
                    <ul className="list-group">
                        {categories &&
                            categories.map((post: ICategoryData, index: number) => (
                                <li key={index}>
                                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {post.title}</h5>
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
    }
}

