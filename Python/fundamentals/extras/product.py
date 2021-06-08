
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