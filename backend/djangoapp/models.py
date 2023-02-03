from django.db import models


# Create your models here.
class DataOwner(models.Model):
    id_data_owner = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    creation_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)
    suspension_date = models.DateTimeField(default=None, null=True, blank=True)
    status = models.CharField(max_length=100, default='Test')

    def __str__(self):
        return self.name


class DataDomain(models.Model):
    id_data_domain = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    creation_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)
    suspension_date = models.DateTimeField(default=None, null=True, blank=True)
    status = models.CharField(max_length=100, default='Test')

    def __str__(self):
        return self.name


class Rules(models.Model):

    DATA_DIM_CHOICES = (
        ('Timeliness', 'Timeliness'),
        ('Completeness', 'Completeness'),
        ('Consistency', 'Consistency'),
        ('Uniqueness', 'Uniqueness'),
        ('Accuracy', 'Accuracy'),
        ('Integrity', 'Integrity'),
    )

    id_rule = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000, null=True)
    source = models.CharField(max_length=100)
    data_dimension = models.CharField(
        max_length=100,
        choices=DATA_DIM_CHOICES,
        null=True)
    data_owner = models.ForeignKey(DataOwner, on_delete=models.CASCADE)
    data_domain = models.ForeignKey(DataDomain, on_delete=models.CASCADE)
    version = models.IntegerField
    creation_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)
    suspension_date = models.DateTimeField(default=None, null=True, blank=True)
    status = models.CharField(max_length=100, default='Test')

    def __str__(self):
        return self.name


class Dashboards(models.Model):
    id_dashboard = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    periodicity = models.CharField(max_length=100)
    business_unit = models.CharField(max_length=100)
    owner = models.CharField(max_length=100)
    creation_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)
    suspension_date = models.DateTimeField(default=None, null=True, blank=True)
    status = models.CharField(max_length=100, default='Test')

    def __str__(self):
        return self.name


class DashboardsRules(models.Model):
    sid = models.AutoField(primary_key=True)
    id_dashboard = models.ForeignKey(Dashboards, on_delete=models.CASCADE)
    id_rule = models.ForeignKey(Rules, on_delete=models.CASCADE)

    def __init__(self, *args, **kwargs):
        super().__init__(args, kwargs)
        self.dashboard_rule = None

    def __str__(self):
        return self.sid
