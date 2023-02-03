# Generated by Django 4.1.5 on 2023-01-31 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djangoapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rules',
            name='data_dimension',
            field=models.CharField(choices=[('timeliness', 'timeliness'), ('completeness', 'completeness'), ('consistency', 'consistency'), ('uniqueness', 'uniqueness'), ('accuracy', 'accuracy'), ('integrity', 'integrity')], max_length=100, null=True),
        ),
    ]