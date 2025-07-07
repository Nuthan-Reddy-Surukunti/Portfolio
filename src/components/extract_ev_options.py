import pandas as pd
import json

# Path to the dataset (corrected)
df = pd.read_csv('../../../personal/Machine learning/EV Range Prediction Project/dataset/Electric_Vehicle_Population_Data_20250703.csv')

# Extract unique makes
makes = sorted(df['Make'].dropna().unique().tolist())

# Extract models grouped by make
models = df.groupby('Make')['Model'].unique().apply(list).to_dict()

# Extract unique model years
years = sorted(df['Model Year'].dropna().unique().astype(int).tolist(), reverse=True)

# Save to JSON
with open('ev_options.json', 'w') as f:
    json.dump({'makes': makes, 'models': models, 'years': years}, f, indent=2)

print('EV options extracted to ev_options.json') 