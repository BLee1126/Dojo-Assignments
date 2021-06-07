from pet import Pet, Dog, Cat, Fish
class Ninja:
# implement __init__( first_name , last_name , pet, type )
    def __init__( self, first_name, last_name, pet_name, type ):
        self.first_name = first_name
        self.last_name = last_name
        # if type == 'Dog':
        #     self.pet = Dog(pet_name, type)
        types = {'dog': Dog, 'cat': Cat, 'fish': Fish}
        self.pet = types[type](pet_name)
    def walk(self):
        self.pet.energy -= 10
        self.pet.health -= 10
        return self
    def feed(self):
        self.pet.energy += 10
        return self
    def bathe(self):
        self.pet.health += 5
        self.pet.energy += 5
        return self
    def display_ninja(self):
        print(f'Name: {self.first_name} {self.last_name}\nPet: {self.pet.name}')
        return self

# implement the following methods:
# walk() - walks the ninja's pet invoking the pet play() method
# feed() - feeds the ninja's pet invoking the pet eat() method
# bathe() - cleans the ninja's pet invoking the pet noise() method


brian = Ninja('Brian', 'Lee', 'Bowser', 'dog')
brian.display_ninja().walk().walk().feed().bathe().pet.play().display_pet().noise()

amy = Ninja('Amy', 'Christophersen', 'Bonzai', 'fish')
amy.display_ninja().feed().feed().feed().bathe().walk().pet.play().noise().display_pet()

