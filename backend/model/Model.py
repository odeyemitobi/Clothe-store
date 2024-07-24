#!/venv/bin/python

from datetime import datetime
from sqlalchemy.orm import declarative_base
from uuid import uuid4

import model

Base = declarative_base()

class Model(object):
    def __init__(self, **kwargs):
        if kwargs and len(kwargs) != 0:
            for key in kwargs:
                if key != "__class__":
                    setattr(self, key, kwargs[key])
        else:
            self.id = str(uuid4())
            self.created_at = datetime.now()
            self.updated_at = datetime.now()

    def save(self):
        model.storage.save()

    def new(self):
        model.storage.new(self)
        self.save()

    def delete(self):
        model.storage.delete(self)

    def update(self, update_details):
        update_details["updated_at"] = datetime.now()
        for key, value in update_details.items():
            setattr(self, key, value)
        self.save()
