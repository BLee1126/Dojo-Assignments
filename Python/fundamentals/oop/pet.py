class Pet:
# implement __init__( name , type , tricks ):
    def __init__( self, name ):
        self.name = name
        self.health = 100
        self.energy = 100
    def sleep(self):
        self.energy += 25
        return self
    def eat(self):
        self.energy += 5
        self.health += 10
        return self
    def play(self):
        self.health += 5
        return self
    def noise(self):
        if self == Dog:
            return('woof woof')
        elif self == Cat:
            return('meow')
        elif self == Fish:
            return('<water splash')
        return self
    def display_pet(self):
        print(f'Name: {self.name}\nTricks: {self.tricks}\nHealth: {self.health}, Energy: {self.energy}')
        return self
# implement the following methods:
# sleep() - increases the pets energy by 25
# eat() - increases the pet's energy by 5 & health by 10
# play() - increases the pet's health by 5
# noise() - prints out the pet's sound
    #inheriting subclasses of pets
class Cat(Pet):
    def __init__(self, name):
        super().__init__(name)
        self.tricks = ['cough up fur ball', 'bring back dead mouse', 'roll over']
        self.treats = ['doggie biscuits', 'kibbles n bits', 'dental snacks']
        self.food = ['human food', 'dry food', 'wet food']

class Dog(Pet):
    def __init__(self, name):
        super().__init__(name)
        self.tricks = ['handshake', 'roll over', 'play dead']
        self.treats = ['doggie biscuits', 'kibbles n bits', 'dental snacks']
        self.food = ['human food', 'dry food', 'wet food']

class Fish(Pet):
    def __init__(self, name):
        super().__init__(name)
        self.tricks = ['None']
        self.treats = ['blood worms', 'brine shrimp', 'snacks']
        self.food = ['flakes', 'pellets', 'freeze dried stuff']
