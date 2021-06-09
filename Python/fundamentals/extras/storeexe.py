from store_products import Store
from product import Product

bls = Store('BLS')


beef = Product('Beef', 5.00, 'meat')
chicken = Product('Chicken', 3.0, 'meat')
cereal = Product('Cereal', 4.5, 'pantry')
apples = Product('Apples', 0.3, 'produce')

bls.add_product(apples, 'produce').add_product(cereal, 'pantry').add_product(chicken, 'meat').add_product(beef, 'meat')

bls.show_products()
apples.update_price(.1)
bls.inflation(.2).set_clearance(.80)


bls.sell_product(cereal).show_products()
