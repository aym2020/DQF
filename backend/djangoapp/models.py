from django.db import models

# Create your models here.
class DataOwner(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000, null=True)
    creation_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)
    suspension_date = models.DateTimeField(default=None, null=True, blank=True)
    status = models.CharField(max_length=100, default='Test')

    def __str__(self):
        return self.name


class DataDomain(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000, null=True)
    creation_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)
    suspension_date = models.DateTimeField(default=None, null=True, blank=True)
    status = models.CharField(max_length=100, default='Test')

    def __str__(self):
        return self.name


class Rules(models.Model):

    DATA_DIM_CHOICES = (
        ('TIME', 'Timeliness'),
        ('COMP', 'Completeness'),
        ('CONS', 'Consistency'),
        ('UNIQ', 'Uniqueness'),
        ('ACCU', 'Accuracy'),
        ('INTE', 'Integrity'),
    )

    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000, null=True)
    source = models.CharField(max_length=100, null=True)
    data_dimension = models.CharField(max_length=100, choices=DATA_DIM_CHOICES, null=True)
    data_owner = models.ForeignKey(DataOwner, on_delete=models.CASCADE, related_name='data_owner')
    data_domain = models.ForeignKey(DataDomain, on_delete=models.CASCADE, related_name='data_domain')
    version = models.IntegerField
    creation_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)
    suspension_date = models.DateTimeField(default=None, null=True, blank=True)
    status = models.CharField(max_length=100, default='Test')

    def __str__(self):
        return self.name


class Dashboards(models.Model):
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
    dashboard = models.ForeignKey(Dashboards, on_delete=models.CASCADE, related_name='dashboard')
    rule = models.ForeignKey(Rules, on_delete=models.CASCADE, related_name='rule')

    def __init__(self, *args, **kwargs):
        super().__init__(args, kwargs)
        self.dashboard_rule = None

    def __str__(self):
        return self.sid
