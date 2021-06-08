class Store():

    def __init__(self, name):
        self.name = name
        self.products = {'produce':[], 'meat':[], 'pantry':[]}

    def add_product(self, new_product, category):
        self.products[category].append(new_product)
        return self
    def sell_product(self, id):
        for category in self.products:
            if id in self.products[category]:
                self.products[category].remove(id)

        return self
    def inflation(self,percent_increase):
        for category in self.products:
            for product in self.products[category]:
                product.price *= (1+percent_increase)
        return self
    def set_clearance(self, percent_discount):
        for category in self.products:
            for product in self.products[category]:
                product.price *= (1-percent_discount)
        return self
    def show_products(self):
        for category in self.products:
            for product in self.products[category]:
                print(f'{product.name}, price: {product.price}, category: {product.category}')
        return self

class Product():

    def __init__(self, name, price, category):
        self.name = name
        self.price = float(price)
        self.category = category
    def update_price(self, percent_change, in_increased = True):
        if in_increased:
            self.price *= (1+percent_change)
        else :
            self.price *= (1-percent_change)
        return self
    def print_info(self):
        print(f'{self.name}, category: {self.category}, price: {self.price}')
        return self

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
