const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model : Product}]
    });

    res.status(200).json(categoryData)

  } catch(error) {
    res.status(500).json(error)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryId = await Category.findOne({
      where: { id: req.params.id},
      include: [{ model : Product}]
    });

    res.status(200).json(categoryId)

  } catch(error) {
    res.status(500).json(error)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryCreate = await Category.create({
      category_name: req.body.category_name
    });

    res.status(200).json(categoryCreate)

  } catch(error) {
    res.status(500).json(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryChange = await Category.update({
      category_name: req.body.category_name,
    },
    {
      where: { 
        id: req.params.id 
      },
    });

    res.status(200).json(categoryChange)

  } catch(error) {
    res.status(500).json(error)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoriesChange = await Category.destroy(
    {
      where: { 
        id: req.params.id 
      },
    });

    res.status(200).json(categoriesChange)

  } catch(error) {
    res.status(500).json(error)
  }
});

module.exports = router;
