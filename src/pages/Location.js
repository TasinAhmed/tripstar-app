import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { useDropzone } from "react-dropzone";
import { FaImage } from "react-icons/fa";
import app from "../config/firebase";
import { AuthContext } from "../config/auth";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

const Location = () => {
  const { currentUser } = useContext(AuthContext);
  const [address, setAddress] = useState("");
  const [cords, setCords] = useState({ lat: null, lng: null });
  const [name, setName] = useState("");
  const [placeID, setPlaceID] = useState("");
  const [desc, setDesc] = useState("");
  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCords(latLng);
    setName(value.substr(0, value.indexOf(",")));
    setPlaceID(results[0].place_id);
  };

  const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16
  };

  const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box"
  };

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden"
  };

  const img = {
    display: "block",
    width: "auto",
    height: "100%"
  };

  const Previews = props => {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
      accept: "image/*",
      onDrop: acceptedFiles => {
        setFiles(
          acceptedFiles.map(file =>
            Object.assign(file, {
              preview: URL.createObjectURL(file)
            })
          )
        );
      }
    });

    const thumbs = files.map(file => (
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <img src={file.preview} style={img} />
        </div>
      </div>
    ));

    useEffect(
      () => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
      },
      [files]
    );

    return (
      <section className="drop-section">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} multiple={false} required />
          <div className="file-text">
            <FaImage className="image-icon" />
            <p>Choose an image or drag it here</p>
          </div>
        </div>
        <aside style={thumbsContainer}>{thumbs}</aside>
      </section>
    );
  };

  return (
    <div>
      <Helmet>
        <title>TripStar | Reviews</title>
      </Helmet>
      <div className="local container">
        <h4 className="loc-title">Add a location</h4>
        <form>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading
            }) => (
              <div>
                <input
                  className="form-control loc-search"
                  {...getInputProps({ placeholder: "Search Location" })}
                />
                <div>
                  {suggestions.map(suggestion => {
                    const style = {
                      backgroundColor: suggestion.active
                        ? "rgba(0, 0, 0, .06)"
                        : "#ffffff"
                    };
                    return (
                      <div
                        className="loc-suggestion"
                        {...getSuggestionItemProps(suggestion, { style })}
                      >
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
          <textarea
            placeholder="Description of the location"
            className="form-control loc-description"
            onChange={e => setDesc(e.target.value)}
            required
          ></textarea>
          <Previews />
          <button
            type="submit"
            className="btn btn-primary loc-submit"
            onClick={() => {
              app
                .firestore()
                .collection("location")
                .add({
                  name: name,
                  address: address,
                  location_id: placeID,
                  latitude: cords.lat,
                  longitude: cords.lng,
                  user_id: currentUser.uid,
                  description: desc
                });
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Location;
