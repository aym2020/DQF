# Generated by Django 4.1.5 on 2023-02-12 00:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('djangoapp', '0011_rename_data_domain_rules_id_data_domain_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='rules',
            old_name='id_data_domain',
            new_name='data_domain',
        ),
        migrations.RenameField(
            model_name='rules',
            old_name='id_data_owner',
            new_name='data_owner',
        ),
        migrations.DeleteModel(
            name='DashboardsRules',
        ),
    ]
