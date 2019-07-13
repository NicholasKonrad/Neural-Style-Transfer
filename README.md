# Neural Style Transfer

## Description

This project is able to render the input from your webcam on your computer to the style of [August Macke's "Das helle Haus"] (http://www.das-perfekte-bild.de/august-macke-helles-haus.html).
This Neural Network uses a model that that was trained for object detection on over 82 000 images showing anything, ranging from snapshots to professional photography.

## Setup and Usage of this project

You will need to have python installed on your computer. Follow [this] (https://realpython.com/installing-python/) guide to do so.
To use this repository, clone it and once you have it on your local computer execute the following steps. I was using Git Bash but you should be able to execute it with your regular console.
  1.  Open your console (run cmd  for widows, see [this] (https://macpaw.com/how-to/use-terminal-on-mac) guide for Mac)
  2.  Change the directory to your GitHub repository. To do this, use the command
```bash
cd DIRECTORYNAME 
```
to go to another directory.
  3.  Once you are inside the cloned repo type
```python
python -m http.server
```
  4.  You should now get the notification that a a live server is available at port 8000. To access it go to your browser and type in your seachbar:
```
localhost:8000
```
  5.  Allow the website to use your webcam and see yourself repainted in the style of August Macke (might take a while until loaded).

## Contributions

Feel free to contribute to this project. You may start a discussion first, though.

## License

MIT License
