# Example from https://www.udemy.com/the-modern-python3-bootcamp/
# Keeping this for reference

import unittest
from activities import eat, nap


class ActivityTests(unittest.TestCase):
    def test_eat_healthy(self):
        self.assertEqual(eat("broccoli", is_healthy=True),
                         "I'm eating broccoli, because it's healthy.")

    def test_eat_unhealthy(self):
        self.assertEqual(eat("pizza", is_healthy=False),
                         "I'm eating pizza, because it's delicious.")

    def test_short_nap(self):
        self.assertEqual(nap(1),
                         "I'm feeling refreshed after my 1 hour nap.")

    def test_long_nap(self):
        self.assertEqual(
            nap(3), "Ugh I overslept. I didn't mean to nap for 3 hours.")


if __name__ == "__main__":
    unittest.main()
