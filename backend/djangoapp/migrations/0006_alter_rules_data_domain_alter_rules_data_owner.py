# Generated by Django 4.1.5 on 2023-02-03 22:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('djangoapp', '0005_alter_dashboards_suspension_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rules',
            name='data_domain',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='data_domain', to='djangoapp.datadomain'),
        ),
        migrations.AlterField(
            model_name='rules',
            name='data_owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='data_owner', to='djangoapp.dataowner'),
        ),
    ]