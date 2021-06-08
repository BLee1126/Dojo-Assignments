
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


