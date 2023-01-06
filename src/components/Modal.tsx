import React from "react";
import FileBase64 from "react-file-base64";
import * as buffer from "buffer";
import { useDispatch, useSelector } from "react-redux";
import { updateItems } from "../features/AppSlice";
import {
	closeModal,
	setFiles,
	setIsModal,
	setText,
} from "../features/AppSlice";
type Props = {};

const Modal = (props: Props) => {
	const { text, files } = useSelector((store: any) => store.app);
	const dispatch = useDispatch();

	const handleCancel = (e: any) => {
		e.preventDefault();
		dispatch(closeModal());
	};

	const handleFileChange = (e: any) => {
		dispatch(setFiles(e.target.value));
	};
	const handleTextChange = (e: any) => {
		dispatch(setText(e.target.value));
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(text, "error", files);

		dispatch(
			updateItems({
				text,
				image: JSON.stringify(files),
			})
		);
	};

	const handleDone = ({ base64 }: any) => {
		dispatch(setFiles({ selectedFile: base64 }));
	};
	return (
		<div className="modal-div">
			<form className="modal-box" onSubmit={handleSubmit}>
				<div className="text-box">
					<textarea
						value={text}
						onChange={handleTextChange}
						minLength={27}
						rows={5}
						cols={5}
						placeholder="make an input , not less than 27 letters"></textarea>
				</div>
				<div className="file-box">
					<FileBase64
						type="file"
						value={files}
						onChange={handleFileChange}
						placeholder="Select Files"
						multiple={false}
						onDone={handleDone}
					/>
				</div>

				<div className="btn-box">
					<button className="cancel" onClick={handleCancel}>
						Cancel
					</button>
					<button type="submit"> Submit</button>
				</div>
			</form>
		</div>
	);
};

export default Modal;
