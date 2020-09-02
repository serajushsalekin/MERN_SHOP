const express = require('express')
const categoryRouter = express.Router()
const slugify = require('slugify')
const Category = require('../models/Category')
const { admin_permission_mixin, login_required } = require('../middleware/auth')

const generate_categories = (categories, parentId=null) => {
    let cat_list = []
    let cat
    if (parentId == null) {
        cat = categories.filter( c => c.parentId == undefined)
    }
    else {
        cat = categories.filter(c => c.parentId == parentId)
    }
    for (let cate of cat) {
        cat_list.push({
            _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            children: generate_categories(categories, cate._id)
        })
    }
    return cat_list
}

categoryRouter.route('/')
.post(login_required, admin_permission_mixin, (req, res, next) => {
    const cat_obj = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }

    if (req.body.parentId) {
        cat_obj.parentId = req.body.parentId
    }

    const category = new Category(cat_obj)
    category.save()
    .then(category => {
        if (category) {
            return res.status(201).json({category})
        }
        return res.status(400).json("Shuting down")
    }, err => next(err))
    .catch(err => next(err))
})
.get((req, res, next) => {
    Category.find({}).then(categories => {
        if (categories) {
            const category_list = generate_categories(categories)
            return res.status(200).json({category_list})
        }
        return res.status(400).json("Categories db Empty")
    }, err => next(err)).catch(err => next(err))
})

module.exports = categoryRouter