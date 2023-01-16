import Admin from "../View/Admin";

interface AdminPresenterProps {
}

function AdminPresenter(props: AdminPresenterProps) {

    const onAddCategory = (event: any) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        const name = form.elements.categoryName.value;
        const description = form.elements.categoryDescription.value;
        const parentName = form.elements.categoryParentName.value;

        const obj = {
            name: name,
            description: description,
            parentName: parentName === "" ? null : parentName
        }

        const res = fetch('http://localhost:8080/category/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(obj)
        });

        res.then((res) => {
            if (res.status === 200) {
                alert("Category added");
            } else {
                alert("Error");
            }
        });

    };

    const onAddProduct = (event: any) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        const name = form.elements.productName.value;
        const description = form.elements.productDescription.value;
        const imagePathname = form.elements.productImagePathname.value;
        const price = form.elements.productPrice.value;
        const oldPrice = form.elements.productOldPrice.value;
        const numberAvailable = form.elements.productNumberAvailable.value;
        const categoryName = form.elements.productCategoryName.value;

        const obj = {
            name: name,
            description: description,
            imagePathname: imagePathname,
            price: price,
            oldPrice: oldPrice,
            numberAvailable: numberAvailable,
            categoryName: categoryName
        }

        const res = fetch('http://localhost:8080/product/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(obj)
        });

        res.then((res) => {
            if (res.status === 200) {
                alert("Product added");
            } else {
                alert("Error");
            }
        });

    };

    return <Admin onAddProduct={onAddProduct} onAddCategory={onAddCategory} />
}

export default AdminPresenter;